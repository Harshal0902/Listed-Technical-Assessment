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
        <main className="relative px-4">
          <div className="md:absolute md:left-[320px] md:flex md:justify-between md:items-center lg:left-[360px] mt-6 md:pr-8 lg:mt-24 w-full md:w-[65vw] lg:w-[75vw]">
            Hello World!
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
        </main>
      )
      }
    </div >
  );
}