import Nav from "../_components/nav";

const legal = [
  {
    header: "1. Information we collect",
    details: `We gather various types of information to enhance and optimize our services. This includes personal information such as your name, email address, phone number, and mailing address, collected when you register for an account, contact us, or use our services. We also gather usage information, which encompasses details about your interactions with our website and services, including your IP address, browser type, device information, pages visited, and actions taken.`,
  },
  {
    header: "2. How we use your information",
    details: `Our utilization of the information we collect serves multiple purposes. We use your personal data to furnish requested services, such as responding to inquiries, processing orders, and delivering newsletters or updates if you opt to receive them. Additionally, we analyze usage information to gain insights into how our website and services are used, which informs our continuous improvement efforts, content customization, and enhancements to user experiences.`,
  },
  {
    header: "3. Communication",
    details: `We may employ your contact information to communicate with you concerning our services, provide updates, and convey important notices. You have the option to opt out of marketing communications at any time.`,
  },
  {
    header: "4. Cookies and Tracking Technologies",
    details: `To better understand your browsing behavior and improve your website experience, we utilize cookies and similar tracking technologies. Cookies are small data files stored on your device that facilitate our comprehension of your preferences. By utilizing our website, you implicitly consent to our use of cookies, as detailed in our Cookies Policy. You maintain the ability to manage your cookie preferences through your browser settings.`,
  },
  {
    header: "5. Security",
    details: `We prioritize data security and employ reasonable measures to safeguard your information from unauthorized access, disclosure, alteration, or destruction. While we diligently strive to protect your data, it's important to acknowledge that no method of transmission over the internet or electronic storage is entirely secure. Consequently, we cannot provide absolute security guarantees.`,
  },
];

export default function LegalPage() {
  return (
    <>
      <header className="w-full bg-[#F4F4F4] pb-[50px] flex flex-col justify-center">
        <Nav
          color="text-[#212529]"
          background="bg-[#212529]"
          position="relative"
          img="/assets/images/logo2.png"
        />

        <div className="container flex flex-col mt-[375px] w-full">
          <p className="text-[64px] text-[#212529] gap-12">
            Privacy and Cookies Policy
          </p>
          <p className="text-lg text-[#424649] max-w-[535px]">
            This privacy is designed to inform you about how we collect, use,
            and protect your personal information when you interact with our
            website.
          </p>
        </div>
      </header>

      <main className="flex flex-col gap-[64px]">
        {legal.map((item, index) => (
          <article className="container flex flex-col gap-10 w-ful" key={index}>
            <p className="text-[40px] text-[#212529]">{item.header}</p>

            <p className="text-lg text-[#424649] max-w-[1046px]">
              {item.details}
            </p>
          </article>
        ))}
      </main>
    </>
  );
}
