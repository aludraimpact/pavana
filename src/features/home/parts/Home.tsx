import PavanaBg from "@/components/assets/pavana-bg.png";
import AludraLogo from "@/components/assets/logos/Aludra-logo.svg";
import LineSvg from "@/components/assets/line-2.svg";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden h-screen w-screen">
      <div
        className="h-screen w-screen flex flex-col justify-center items-start px-8"
        style={{
          backgroundImage: `url(${PavanaBg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="space-y-6 z-10">
          <div
            className={`text-white font-bold text-5xl md:text-6xl lg:text-8xl text-left space-y-2 md:space-y-4 sm:px-8`}
          >
            <p>Bringing equilibrium </p>
            <p>back to our air composition</p>
          </div>
        </div>
        <div className="space-y-6 mt-3 md:mt-6 w-5/6 z-10">
          <div
            className={`text-white text-2xl md:text-3xl lg:text-4xl text-left md:space-y-4 sm:px-8`}
          >
            <p className="leading-relaxed">
              Cutting-edge CO2 mitigation tech dominates emissions management,
              showcasing prowess in battling environmental pollutants with
              unparalleled mastery and precision.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 pr-12 pb-5 hidden md:block">
          <Link href="/">
            <Image
              src={AludraLogo}
              alt="Ozgard Logo"
              height={80}
              className=""
            />
          </Link>
        </div>
      </div>
      <div className="relative h-screen w-screen float-start z-0">
        <div className="absolute -top-[30rem] -right-[58rem]">
          <Image
            src={LineSvg}
            alt="blue line"
            height={1800}
            className="rotate-3 opacity-[0.8]"
          />
        </div>
      </div>
    </div>
  );
}
