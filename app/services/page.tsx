import Nav from "../_components/nav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OurPride from "../_sections/_services/pride";

export default function Services() {
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
          <p className="text-[64px] text-white gap-12">Services</p>
          <p className="text-lg text-white max-w-[535px]">
            Discover our comprehensive range of services tailored to meet your
            energy efficiency, LED lighting, photovoltaic energy, and much more.
          </p>
        </div>
      </header>

      <Accordion type="single" collapsible className="container w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-[30px] text-[#212529] hover:no-underline">
            Illumination
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            possimus exercitationem facere soluta voluptatum quo fugiat?
            Obcaecati atque quaerat saepe exercitationem, est blanditiis
            perspiciatis nulla officiis distinctio error non veniam!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-[30px] text-[#212529] hover:no-underline">
            Sustainable energy
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            possimus exercitationem facere soluta voluptatum quo fugiat?
            Obcaecati atque quaerat saepe exercitationem, est blanditiis
            perspiciatis nulla officiis distinctio error non veniam!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-[30px] text-[#212529] hover:no-underline">
            Electric Mobility
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            possimus exercitationem facere soluta voluptatum quo fugiat?
            Obcaecati atque quaerat saepe exercitationem, est blanditiis
            perspiciatis nulla officiis distinctio error non veniam!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-[30px] text-[#212529] hover:no-underline">
            Consulting
          </AccordionTrigger>
          <AccordionContent className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            possimus exercitationem facere soluta voluptatum quo fugiat?
            Obcaecati atque quaerat saepe exercitationem, est blanditiis
            perspiciatis nulla officiis distinctio error non veniam!
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <OurPride />
    </>
  );
}
