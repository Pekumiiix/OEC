import Link from "next/link";

export default function KnowMore() {
  return (
    <section className="bg-[#F4F4F4] mt-[50px]">
      <div className="container w-full flex flex-col lg:flex-row gap-y-10 gap-x-[155px] py-8 lg:py-0 items-center">
        <img
          src="/assets/images/know-more.png"
          alt="illustration"
          className="w-[380px] h-auto lg:-mt-[50px] lg:pb-[50px]"
        />

        <div className="flex flex-col gap-10">
          <p className="text-[#212529] text-[40px]">
            Deep knowledge in the field
          </p>
          <p className="text-lg text-[#424649]">
            Our extensive experience and deep expertise in the energy sector
            have positioned us as leaders in the industry. With two decades of
            market leadership, we have honed our knowledge in energy efficiency,
            LED lighting, photovoltaic energy, and electric mobility to a level
            that sets us apart. Our team&apos;s profound understanding of these
            domains enables us to provide innovative, tailored solutions that
            not only meet but exceed the expectations of our clients.
          </p>
          <Link href={`/`} className="flex items-center gap-2 text-lg">
            <p>Learn more</p>
            <img
              src="/assets/images/left.png"
              alt="Link arrow"
              className="w-[17px] h-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
