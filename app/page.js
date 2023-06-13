"use client"

import { signOut, useSession } from "next-auth/react"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/signin')
    }
  }, [session, router])

  if (!session) {
    return null
  }

  return (
    <div>
      <main className="bg-red-500">
        Hello World!
        <button onClick={() => signOut()}>Sign Out</button>
      </main>
    </div>
  )
}
