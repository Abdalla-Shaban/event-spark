import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import logo from "../../public/eventSpark.svg";
import { Separator } from "../ui/separator";
import { AlignRight } from "lucide-react";
import NavLinks from "./NavLinks";
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center select-none">
              <h1 className="text-xl font-semibold">EventSpark</h1>
              <Image src={logo} width={25} height={25} alt="EventSpark Logo" />
            </div>
          </SheetTitle>
        </SheetHeader>
        <Separator className="mt-4" />
        <nav className="flex flex-col gap-5 mt-4">
          <NavLinks />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
