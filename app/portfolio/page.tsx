import Nav from "../_components/nav";
import GetInTouch from "../_sections/contact-us";
import Distinction from "./_sections/distinction";
import PortfolioTab from "./_sections/portfolio-tab";

export default function Portfolio() {
  return (
    <>
      <header className="w-full bg-[#212529] pb-[50px] flex flex-col justify-center items-center">
        <Nav
          color="text-white"
          background="bg-[#FFFFFF4D]"
          position="absolute"
          img="/assets/images/logo1.png"
          border="hover:border-white"
          hoverbg="hover:bg-white"
          hovertext="hover:text-[#212529]"
        />

        <div className="container flex flex-col mt-[375px]">
          <p className="text-[64px] text-white gap-12">Portfolio</p>
          <p className="text-lg text-white max-w-[535px]">
            Explore our portfolio of remarkable projects where innovation and
            sustainability converge.
          </p>
        </div>
      </header>

      <Distinction />

      <PortfolioTab />

      <GetInTouch />
    </>
  );
}
