"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <Link
        href={siteConfig.links.personalSite}
        className="text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block text-foreground/60"
      >
        About
      </Link>
    </nav>
  );
}
