"use client";
import {sidebarLinks} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation"

export default function Bottombar() {
  const pathname = usePathname();
  return (
    <footer className="bottombar">
      <div className="bottombar_container">
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
    </footer>
  );
}