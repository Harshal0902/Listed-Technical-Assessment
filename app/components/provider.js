"use client"
import { SessionProvider } from "next-auth/react";

export default function Provider({ children }) {
  return (
    <SessionProvider>
      {children} {/* Our entire app -> has access to NextAuth */}
    </SessionProvider>
  )
}