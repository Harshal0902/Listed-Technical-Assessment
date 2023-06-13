"use client"

import { signOut, useSession } from "next-auth/react"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
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
                Page
                <button onClick={() => signOut()}>Sign Out</button>
            </main>
        </div>
    )
}
