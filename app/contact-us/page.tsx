import Nav from "../_components/nav";
import ContactMain from "./_sections/main";

export default function ContactPage() {
  return (
    <>
      <header className="w-full bg-[#F4F4F4] pb-[50px]">
        <Nav
          color="text-[#212529]"
          background="bg-[#212529]"
          position="relative"
          img="/assets/images/logo2.png"
        />

        <div className="container flex flex-col mt-[375px]">
          <p className="text-[64px] text-[#212529] gap-12">Contact us</p>
          <p className="text-lg text-[#424649] max-w-[535px]">
            Our team is here to assist you on your journey towards a sustainable
            and efficient energy future.
          </p>
        </div>
      </header>

      <ContactMain />

      <section className="w-full">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-5 h-fit">
          <img
            src="/assets/images/c1.png"
            alt="Location"
            className="col-span-1 md:col-span-2 rounded-[8px] h-full"
          />
          <img
            src="/assets/images/c2.png"
            alt="Location"
            className="col-span-1 md:col-span-2 lg:col-span-1 rounded-[8px] w-full max-h-[488px]"
          />
        </div>
      </section>
    </>
  );
}
