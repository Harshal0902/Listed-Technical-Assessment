"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';

export default function Home() {
  
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/signin");
    },
  });

  return (
    <div>
      {session && (
        <main className="bg-red-500">
          Hello World!
          <button onClick={() => signOut()}>Sign Out</button>
        </main>
      )}
    </div>
  );
}