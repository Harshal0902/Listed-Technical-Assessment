"use client";

import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Link from "next/dist/client/link";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
        <div>
          <div
            className="absolute top-0 left-0 z-50 flex items-center justify-center w-12 h-12 bg-gray-200 cursor-pointer"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </div>

          <aside
            className={`fixed top-0 left-0 z-40 w-64 h-screen bg-gray-800 text-white transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
          >
            {/* Sidebar Content */}
            <div className="p-4">
              <h2 className="text-2xl font-bold">Sidebar</h2>

              {/* Sidebar Items */}
              <nav className="mt-6">
                <ul>
                  <li>
                    <Link href="/">
                      <div className="block py-2">Home</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <div className="block py-2">Home</div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <div className="block py-2">Home</div>
                    </Link>
                  </li>
                 
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}
