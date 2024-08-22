import Nav from "../_components/nav";
import GetInTouch from "../_sections/contact-us";
import Distinction from "./_sections/distinction";
import PortfolioTab from "./_sections/portfolio-tab";

export default function Portfolio() {
  return (
    <>
      <header className="w-full bg-[#212529] pb-[50px]">
        <Nav
          color="text-white"
          background="bg-[#FFFFFF4D]"
          position="absolute"
          img="/assets/images/logo1.png"
        />

        <div className="container flex flex-col mt-[375px]">
          <p className="text-[64px] text-white gap-12">About Us</p>
          <p className="text-lg text-white max-w-[535px]">
            Learn more about Oakland C.E. and our commitment to excellence,
            innovation, and sustainability.
          </p>
        </div>
      </header>

      <Distinction />

      <PortfolioTab />

      <GetInTouch />
    </>
  );
}
