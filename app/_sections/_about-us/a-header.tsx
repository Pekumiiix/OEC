import Nav from "@/app/_components/nav";

export default function Header() {
  return (
    <header className="w-full bg-[#F4F4F4] pb-[50px]">
      <Nav
        color="text-[#212529]"
        background="bg-[#212529]"
        position="relative"
        img="/assets/images/logo2.png"
      />

      <div className="container flex flex-col mt-[375px]">
        <p className="text-[64px] text-[#212529] gap-12">About Us</p>
        <p className="text-lg text-[#424649] max-w-[535px]">
          Learn more about Oakland C.E. and our commitment to excellence,
          innovation, and sustainability.
        </p>
      </div>
    </header>
  );
}
