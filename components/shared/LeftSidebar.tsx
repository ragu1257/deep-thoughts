"use client";

import {
  SignOutButton,
  SignedIn
} from "@clerk/nextjs";
import {sidebarLinks} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation"
export default function LeftSidebar() {
  const pathname = usePathname();
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route;
          return (
            <Link key={link.label} href={link.route} className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}>
            
            <Image src={link.imgURL} alt={link.label} width={24} height={24} />
            <p className="max-lg:hidden text-light-1">{link.label}</p>
        </Link>
          )
        }
       
        )}
      </div>
      <div className="mt-10 px-6">
      <div className="flex items-center gap-1">
          <div className="bolck ">
            <SignedIn>
              <SignOutButton>
                <div className="flex cursor-pointer gap-4 p-4">
                  <Image
                    src="/assets/logout.svg"
                    alt="logout"
                    width={24}
                    height={24}
                  />
                  <p className="text-light-2 max-lg:hidden">Logout</p>
                </div>
              </SignOutButton>
            </SignedIn>
          </div>
        </div>
      </div>
    </section>
  );
}