"use client"

import { signOut, useSession } from "next-auth/react"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/signin");
    },
  });

  return (
    <div>
      <main className="bg-red-500">
        Hello World!
        <button onClick={() => signOut()}>Sign Out</button>
      </main>
    </div>
  )
}
