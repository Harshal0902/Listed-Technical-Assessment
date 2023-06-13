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
        <main className="relative">
          <div className="md:absolute left-[320px] mt-6 md:mt-0 top-10 bg-red-500">
            Hello World!
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
        </main>
      )}
    </div>
  );
}