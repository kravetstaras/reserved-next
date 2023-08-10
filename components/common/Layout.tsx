import React, { ReactNode } from "react";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-gray-100 min-h-screen w-screen overflow-hidden">
      <main className="m-auto bg-white">
        <nav className="bg-white p-2 flex justify-between">
          <Link href="/" className="font-bold text-gray-700 text-2xl">
            OpenTable
          </Link>
          <Link
            href="/api/auth/logout"
            className="bg-blue-400 text-white border p-1 px-4 rounded ml-auto mr-3"
          >
            Sign out
          </Link>
        </nav>
        {children}
      </main>
    </main>
  );
}
