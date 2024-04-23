"use client";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavLinks from "./NavLinks";
import MobileNav from "../shared/MobileNav";
import Logo from "./Logo";
const Header = () => {
  return (
    <header className="flex items-center bg-white justify-between min-h-[74px] p-4 md:px-10">
      <Logo />
      <SignedIn>
        <nav className="hidden md:flex items-center gap-10">
          <NavLinks />
        </nav>
      </SignedIn>
      <SignedIn>
        <div className="flex items-center gap-3">
          <UserButton afterSignOutUrl="/" />
          <div className="md:hidden flex flex-col items-center gap-10">
            <MobileNav />
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <Button
          asChild
          className="rounded-full bg-orange-500 hover:bg-orange-600"
          size="lg"
        >
          <Link href="/sign-in">Login</Link>
        </Button>
      </SignedOut>
    </header>
  );
};

export default Header;
