'use client'
import React, { useEffect } from 'react'
import BillingDashboard from './_components/billing-dashboard'
import { useSearchParams } from 'next/navigation'
import { updateUserTier } from '@/action/user' // Move server action to separate file

export default function Billing() {
  const searchParams = useSearchParams()
  const session_id = searchParams.get('session_id')

  useEffect(() => {
    if (session_id) {
      updateUserTier(session_id)
    }
  }, [session_id])

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Billing</span>
      </h1>
      <BillingDashboard />
    </div>
  )
}