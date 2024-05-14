"use client"

import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { updateUser } from "@/lib/actions/user.actions";

export default function Topbar({user}: {readonly user: any}) {
  // const submitInfo = async () => {
    
  //   await updateUser({
  //     userId: user.id,
  //     username: user.username,
  //     name: user.firstName,
  //     email: user.emailAddresses[0] ? user.emailAddresses[0].emailAddress : false,
  //     phoneNumber: user.phoneNumbers[0] ? user.phoneNumbers[0].phoneNumber : false,
  //     createdAtUser: new Date(user.createdAt ).toLocaleDateString("en-US", {
  //       weekday: "long",
  //       year: "numeric",
  //       month: "long",
  //       day: "numeric",
  //     })
  //   });
  // }
  return (
    <header className="bg-gray-800 text-white py-6">

      <nav className="topbar">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/assets/deep-thoughts-logo.svg" alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '20%', height: 'auto' }}
          />

        </Link>
        <div className="flex items-center gap-1">
          {/* <div>
            <button onClick={submitInfo}>
              Submit Info to DB
            </button>
          </div> */}
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
                    className="mr-2"
                  />
                 <p className="pr-2">Logout</p> 
                </div>
              </SignOutButton>
            </SignedIn>
          </div>
        </div>
      </nav>
    </header>
  );
}
