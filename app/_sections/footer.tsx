import Link from "next/link";

const footerLinks = [
  {
    header: "Pages",
    subLinks: [
      { name: "Services", link: "/services" },
      { name: "About us", link: "/about-us" },
      { name: "Portfolio", link: "/portfolio" },
      { name: "Contact us", link: "/contact-us" },
    ],
  },
  {
    header: "Social Media",
    subLinks: [{ name: "Github", link: "https://github.com/Pekumiiix" }],
  },
  {
    header: "Legal",
    subLinks: [
      {
        name: "Privacy and Cookies Policy",
        link: "/legal",
      },
      {
        name: "Terms and Conditions",
        link: "/legal",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-12 md:gap-[70px] pt-[100px] pb-[64px] bg-[#212529]">
      <div className="container flex flex-wrap justify-between gap-y-12">
        <div className="flex flex-col sm:flex-row gap-x-10 gap-y-5">
          {footerLinks.map((item, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <p className="text-white text-[21px]">{item.header}</p>

              <div className="flex flex-wrap flex-col gap-2 min-w-[165px]">
                {item.subLinks.map((sub, idx) => (
                  <Link
                    href={sub.link}
                    key={idx}
                    className="text-lg text-[rgba(255,255,255,0.8)]"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <img
          src={`/assets/images/footer1.png`}
          alt="Footer Iamge"
          className="w-[249px] h-[70px]"
        />
      </div>

      <div className="container flex flex-col gap-x-[10px] sm:flex-row items-center justify-between">
        <p className="text-sm text-white">Oakland -Energy Consulting ©</p>
        <p className="text-sm text-[rgba(255,255,255,0.3)] text-center">
          Designed by Ferréh and developed by Pelumi
        </p>
      </div>
    </footer>
  );
}
