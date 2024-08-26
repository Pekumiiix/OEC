interface Images {
  imgSrc?: string;
  name?: string;
}

const images: Images[] = [
  { imgSrc: "/assets/images/expertise/one.png", name: "Energy Effeiceincy" },
  { imgSrc: "/assets/images/expertise/two.png", name: "LED Lighting" },
  { imgSrc: "/assets/images/expertise/three.png", name: "Photovoltaic Energy" },
  { imgSrc: "/assets/images/expertise/four.png", name: "Electric Mobility" },
];

export default function Expertise() {
  return (
    <section className="container flex flex-col gap-10 h-fit">
      <div className="flex flex-col">
        <p className="text-[#212529] text-[40px]">Area of Expertise</p>
        <p className="text-[#424649] text-lg w-full lg:max-w-[50%]">
          Whether for small or large-scale projects, we are committed to
          delivering cutting-edge results, contributing to a more sustainable
          and innovative energy future.
        </p>
      </div>

      <div className="w-full flex overflow-auto sm:grid grid-cols-2 md:grid-cols-4 gap-5">
        {images.map((item, index) => (
          <img
            src={item.imgSrc}
            alt={item.name}
            key={index}
            className="w-[250px] h-auto sm:w-auto sm:max-h-[357px]"
          />
        ))}
      </div>

      <p className="text-lg text-[#424649] w-full lg:max-w-[60%] ml-auto mt-[100px]">
        Leading the market for two decades, we have been experts in energy
        efficiency. With an unwavering commitment to innovation, we offer
        tailored solutions for projects of all sizes. From LED lighting to
        photovoltaic energy and electric mobility, our dedicated team works
        tirelessly to deliver cutting-edge results. We are committed to shaping
        a more sustainable and efficient energy future.
      </p>
    </section>
  );
}
