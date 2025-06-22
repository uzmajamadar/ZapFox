'use server'

import { currentUser } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

export const onPaymentDetails = async () => {
  const user = await currentUser()

  if (user) {
    const connection = await db.user.findFirst({
      where: {
        clerkId: user.id,
      },
      select: {
        tier: true,
        credits: true,
      },
    })

    return connection
  }

  return null
}