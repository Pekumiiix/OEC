import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const portfolio = [
  {
    imgSrc: "/assets/images/portfolio/p1.png",
    concept: "Delloite Building, London",
    tag: "Energy Efficiency",
    isLed: false,
    isEnergy: true,
    isElectric: false,
  },
  {
    imgSrc: "/assets/images/portfolio/p2.png",
    concept: "Car Chargers, Oakland",
    tag: "Electric Mobility",
    isLed: false,
    isEnergy: false,
    isElectric: true,
  },
  {
    imgSrc: "/assets/images/portfolio/p3.png",
    concept: "Amazon Headquarters, UK",
    tag: "LED Lighting",
    isLed: true,
    isEnergy: false,
    isElectric: false,
  },
  {
    imgSrc: "/assets/images/portfolio/p4.png",
    concept: "Astrazeneca Lab Facilities, Nevada",
    tag: "LED Lighting",
    isLed: true,
    isEnergy: false,
    isElectric: false,
  },
  {
    imgSrc: "/assets/images/portfolio/p5.png",
    concept: "Gordon’s BBQ, Las Vegas",
    tag: "Energy Efficiency",
    isLed: false,
    isEnergy: true,
    isElectric: false,
  },
  {
    imgSrc: "/assets/images/portfolio/p6.png",
    concept: "Car Chargers, Portugal",
    tag: "Electric Mobility",
    isLed: false,
    isEnergy: false,
    isElectric: true,
  },
];

export default function PortfolioTab() {
  return (
    <section className="py-[64px] bg-[#F4F4F4] w-full">
      <Tabs
        defaultValue="all"
        className="container w-full flex flex-col items-start gap-[64px]"
      >
        <TabsList className="flex flex-wrap h-fit items-center gap-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="led">LED Lighting</TabsTrigger>
          <TabsTrigger value="energy-efficiency">Energy Effeciency</TabsTrigger>
          <TabsTrigger value="electric-mobility">Electric Mobility</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
            {portfolio.map((item, index) => (
              <div
                className="flex flex-col gap-4 items-center justify-center"
                key={index}
              >
                <img
                  src={`${item.imgSrc}`}
                  alt={`${item.concept} picture`}
                  className="w-[100%] lg:max-w-[424px] h-auto rounded-[8px]"
                />

                <div className="flex flex-col gap-2 max-w-[424px] w-full">
                  <p className="text-lg text-[#212529]">{item.concept}</p>
                  <p className="text-sm text-[rgba(33,37,41,0.7)]">
                    {item.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="led">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
            {portfolio.map((item, index) => (
              <div
                className={`${
                  item.isLed ? "flex" : "hidden"
                } flex-col gap-4 items-center justify-center`}
                key={index}
              >
                <img
                  src={`${item.imgSrc}`}
                  alt={`${item.concept} picture`}
                  className="w-[100%] lg:max-w-[424px] h-auto rounded-[8px]"
                />

                <div className="flex flex-col gap-2 max-w-[424px] min-w-full">
                  <p className="text-lg text-[#212529]">{item.concept}</p>
                  <p className="text-sm text-[rgba(33,37,41,0.7)]">
                    {item.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="energy-efficiency">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
            {portfolio.map((item, index) => (
              <div
                className={`${
                  item.isEnergy ? "flex" : "hidden"
                } flex-col gap-4 items-center justify-center`}
                key={index}
              >
                <img
                  src={`${item.imgSrc}`}
                  alt={`${item.concept} picture`}
                  className="w-[100%] lg:max-w-[424px] h-auto rounded-[8px]"
                />

                <div className="flex flex-col gap-2 max-w-[424px] min-w-full">
                  <p className="text-lg text-[#212529]">{item.concept}</p>
                  <p className="text-sm text-[rgba(33,37,41,0.7)]">
                    {item.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="electric-mobility">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
            {portfolio.map((item, index) => (
              <div
                className={`${
                  item.isElectric ? "flex" : "hidden"
                } flex-col gap-4 items-center justify-center`}
                key={index}
              >
                <img
                  src={`${item.imgSrc}`}
                  alt={`${item.concept} picture`}
                  className="w-[100%] lg:max-w-[424px] h-auto rounded-[8px]"
                />

                <div className="flex flex-col gap-2 max-w-[424px] min-w-full">
                  <p className="text-lg text-[#212529]">{item.concept}</p>
                  <p className="text-sm text-[rgba(33,37,41,0.7)]">
                    {item.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
