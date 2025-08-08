'use server'
import Stripe from 'stripe'
import { currentUser } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export const updateUserTier = async (session_id: string) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET!, {
    typescript: true,
    apiVersion: '2023-10-16',
  })

  const session = await stripe.checkout.sessions.listLineItems(session_id)
  const user = await currentUser()
  
  if (user && session.data.length > 0) {
    const description = session.data[0].description || 'Free'
    
    await db.user.update({
      where: { clerkId: user.id },
      data: {
        tier: description,
        credits: description === 'Unlimited' ? 'Unlimited' : 
                description === 'Pro' ? '100' : '10',
      },
    })
  }
}