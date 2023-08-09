import React, { ReactNode } from 'react'
import Navbar from './Navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-gray-100 min-h-screen w-screen overflow-hidden">
      <main className="m-auto bg-white">
        <Navbar />
        {children}
      </main>
    </main>
  );
}
