import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="container flex flex-col gap-12">
      <p className="text-[40px] text-[#212529]">Get in touch with us</p>
      <p className="w-full lg:max-w-[55%] text-lg text-[#424649]">
        If you&apos;re ready to explore how our expertise in energy efficiency,
        LED lighting, photovoltaic energy, and electric mobility can benefit
        your projects, don&apos;t hesitate to reach out. We&apos;re here to
        listen, collaborate, and provide you with tailored solutions that align
        with your specific needs and goals.
      </p>

      <Link
        href={`/contact-us`}
        className="flex items-center gap-2 text-lg group w-fit"
      >
        <p className="scale-100 group-hover:scale-90 transition-all duration-300">
          Contact us
        </p>
        <img
          src="/assets/images/left.png"
          alt="Link arrow"
          className="w-[17px] h-auto group-hover:translate-x-1 transition-all duration-300"
        />
      </Link>
    </section>
  );
}
