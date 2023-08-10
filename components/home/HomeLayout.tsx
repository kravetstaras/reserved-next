import React, { ReactNode } from "react";
import { UserProfile } from "@auth0/nextjs-auth0/client";
import HomeNavbar from "./HomeNavbar";

export default function HomeLayout({
  children,
  user,
}: {
  children: ReactNode;
  user: UserProfile | undefined;
}) {
  return (
    <main className="bg-gray-100 min-h-screen w-screen overflow-hidden">
      <main className="m-auto bg-white">
        <HomeNavbar user={user} />
        {children}
      </main>
    </main>
  );
}
