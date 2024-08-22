import Link from "next/link";

export default function OurPride() {
  return (
    <>
      <section className="container">
        <div className="flex flex-wrap items-end justify-end gap-5">
          <p className="text-sm text-[#A6A6AB]">
            Executive Board members Oakland. 2023
          </p>

          <img
            src="/assets/images/team.png"
            alt="Team picture"
            className="w-full h-auto md:w-auto md:h-[573px]"
          />
        </div>
      </section>

      <section className="container flex flex-col gap-12">
        <p className="text-[40px] text-[#212529]">Proudly helping businesses</p>
        <p className="w-full lg:max-w-[55%] text-lg text-[#424649]">
          Explore our portfolio of remarkable projects where innovation and
          sustainability converge. Discover how we&apos;ve transformed energy
          landscapes and elevated standards in the industry.
        </p>

        <Link href={`/portfolio`} className="flex items-center gap-2 text-lg">
          <p>View our Portfolio</p>
          <img
            src="/assets/images/left.png"
            alt="Link arrow"
            className="w-[17px] h-auto"
          />
        </Link>
      </section>
    </>
  );
}
