"use client";
import Image from "next/image";
import LineSvg from "@/components/assets/line-2.svg";
import StoneSvg from "@/components/assets/stone-bg.svg";

const Tecnology = () => {
  return (
    <div className="bg-white overflow-hidden h-screen w-screen">
      <div className="h-screen w-screen flex flex-col justify-center items-start px-8">
        <div className="space-y-6 z-10">
          <div className="text-stone-400 font-bold text-5xl md:text-6xl lg:text-8xl text-left space-y-2 md:space-y-4 sm:px-8">
            <p>About</p>
          </div>
        </div>
        <div className="space-y-6 mt-6 w-6/12 z-10">
          <div className="text-stone-400 text-xs md:text-lg text-left md:space-y-4 sm:px-8 font-light">
            <p className="leading-relaxed">
              Pavana by Aludra is dedicated to combating the escalating levels
              of atmospheric carbon emissions. Through cutting-edge technology,
              it expedites the natural process of CO2 sequestration in
              limestone. Using meticulously processed pellets, CO2 is
              efficiently captured and repurposed to foster sustainable
              Spirulina cultivation. This holistic approach not only mitigates
              carbon emissions but also promotes environmental sustainability
              and yields valuable products. By harnessing the power of nature
              and innovative solutions, Pavana is driving forward the global
              effort to combat climate change and create a more sustainable
              future for generations to come.
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-screen w-screen z-0">
        <div className="absolute md:top-[75rem] lg:-top-[113rem] -right-[58rem]">
          <Image
            src={LineSvg}
            alt="blue line"
            height={1800}
            className="rotate-3 opacity-[0.8]"
          />
          <div className="absolute md:-bottom-2 right-[55rem]">
            <Image src={StoneSvg} alt="blue line" height={500} className="" />
          </div>
        </div>
      </div>
      {/* <div className="relative h-screen w-screen float-start z-10"></div> */}
    </div>
  );
};
export default Tecnology;
