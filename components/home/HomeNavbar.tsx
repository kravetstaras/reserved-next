import { UserProfile } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import Image from "next/image";

export default function HomeNavbar({
  user,
}: {
  user: UserProfile | undefined;
}) {
  const src = user?.picture as string;
  const alt = user?.name as string;
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        OpenTable
      </Link>
      <div>
        <div className="flex">
          {!!user ? (
            <>
              <div>
                <Image src={src} alt={alt} height={33} width={33} />
              </div>
              <Link
                href="/api/auth/logout"
                className="bg-blue-400 text-white border p-1 px-4 rounded mr-3 ml-3"
              >
                Log out
              </Link>
            </>
          ) : (
            <Link
              href="/api/auth/login"
              className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
