"use client"

import {
  OrganizationSwitcher,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { updateUser } from "@/lib/actions/user.actions";

export default function Topbar({user}: {readonly user: any}) {
  console.log("this is current user info",user);
  const submitInfo = async () => {
    
    await updateUser({
      userId: user.id,
      username: user.username,
      name: user.firstName,
      email: user.emailAddresses[0].emailAddress,
      phoneNumber: user.phoneNumbers[0].phoneNumber,
    });
  }
  return (
    <header className="bg-gray-800 text-white py-6">
      <nav className="topbar">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
          <p className="text-heading3-bold text-light-1 max-xs:hidden">
            Threads
          </p>
        </Link>
        <div className="flex items-center gap-1">
          <div>
            <button onClick={submitInfo}>
              Submit Info to DB
            </button>
          </div>
          <div className="bolck ">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <SignOutButton>
                <div className="flex cursor-pointer">
                  <Image
                    src="/assets/logout.svg"
                    alt="logout"
                    width={24}
                    height={24}
                  />
                </div>
              </SignOutButton>
            </SignedIn>
          </div>
          <OrganizationSwitcher />
        </div>
      </nav>
    </header>
  );
}
