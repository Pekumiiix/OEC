import { Button } from "@/components/ui/button";
import Link from "next/link";
import Nav from "../_components/nav";

export function Header() {
  return (
    <header className="relative w-full h-fit grid grid-cols-1 lg:grid-cols-2">
      <Nav
        color="text-white"
        background="bg-[#FFFFFF4D]"
        position="absolute"
        img="/assets/images/logo1.png"
        border="hover:border-[#212529]"
        hoverbg="hover:bg-white"
        hovertext="hover:text-[#212529]"
      />

      <div className="container h-full flex flex-col justify-end gap-12 sm:pl-10 pb-10 bg-[#212529]">
        <p className="text-[40px] sm:text-[64px] text-white max-w-[292px] mt-[400px] lg:mt-0">
          REDEFINING ENERGY
        </p>
        <p className="text-lg text-[#A6A6AB]">
          As market leaders for 20 years, we are experts in energy effeciency
          providing tailored, concrete solutions to meet your needs.
        </p>
        <Button
          asChild
          className="bg-white text-[#212529] hover:bg-[#212529] hover:text-white text-lg font-medium rounded-[40px] px-10 py-4 w-fit h-[57px] transition-all duration-300"
        >
          <Link href={`/portfolio`}>View our portfolio</Link>
        </Button>
      </div>
      <img
        src={`/assets/images/hero.png`}
        alt="Hero background"
        className="w-full h-auto lg:h-[700px]"
      />
    </header>
  );
}
