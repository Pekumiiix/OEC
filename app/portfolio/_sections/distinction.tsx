interface Distinction {
  imgSrc: string;
  name: string;
}

const dinstictions: Distinction[] = [
  { imgSrc: "/assets/images/innovate.png", name: "Innovation" },
  { imgSrc: "/assets/images/expertise.png", name: "Expertise" },
  { imgSrc: "/assets/images/quality.png", name: "Quality" },
];

export default function Distinction() {
  return (
    <section className="container flex flex-col gap-[64px]">
      <p className="text-[40px] text-[#212529]">
        The distinction that sets us Apart in the industry
      </p>

      <p className="text-lg text-[#424649]">
        In a highly competitive industry, what distinguishes a company is not
        just its offerings but its unwavering commitment to excellence and
        innovation. At Oakland C.E., we understand that to rise above the
        competition, we must constantly strive for distinction in every aspect
        of our business. Our journey in the energy sector has been defined by
        innovation and expertise.
      </p>

      <div className="flex flex-wrap items-center gap-x-10">
        {dinstictions.map((item, index) => (
          <div
            className="flex items-center gap-3 min-w-fit max-w-[248px]"
            key={index}
          >
            <img
              src={`${item.imgSrc}`}
              alt={`${item.name} picture`}
              className="w-[36px] h-[36px]"
            />
            <p className="text-[#212529] text-[32px]">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
