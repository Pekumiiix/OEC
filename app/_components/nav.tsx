import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import MenuIcon from "./menu-icon";

interface Link {
  name?: string;
  path?: string;
}

const links: Link[] = [
  { name: "About us", path: "about-us" },
  { name: "Services", path: "services" },
  { name: "Portfolio", path: "portfolio" },
  { name: "Contanct us", path: "contact-us" },
];

export default function Nav({ color, background, position, img }: any) {
  return (
    <nav
      className={`${position} container h-fit top-[50px] flex items-center justify-between`}
    >
      <div className="flex items-center gap-2">
        <img src={img} alt="Logo" className="w-[34px] h-[36px]" />

        <div className="flex flex-col">
          <p className={`${color} text-sm`}>Oakland</p>
          <p className="text-[#A6A6AB] text-xs">Energy Consulting</p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <Link href={`${links[0].path}`} className={`${color} text-lg`}>
          {links[0].name}
        </Link>
        <Link href={`${links[1].path}`} className={`${color} text-lg`}>
          {links[1].name}
        </Link>
        <Link href={`${links[2].path}`} className={`${color} text-lg`}>
          {links[2].name}
        </Link>
        <Link
          href={`${links[3].path}`}
          className={`${background} text-white text-lg py-4 px-10 h-[57px] rounded-full`}
        >
          {links[3].name}
        </Link>
      </div>

      <Popover>
        <PopoverTrigger className="flex md:hidden">
          <MenuIcon />
        </PopoverTrigger>
        <PopoverContent
          className={`${background} flex flex-col border-none mr-10`}
        >
          {links.map((item, index) => (
            <Link
              href={`${item.path}`}
              key={index}
              className={`text-white text-lg`}
            >
              {item.name}
            </Link>
          ))}
        </PopoverContent>
      </Popover>
    </nav>
  );
}
