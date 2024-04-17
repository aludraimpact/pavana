import PavanaBg from "@/components/assets/pavana-bg.png";
import AludraLogo from "@/components/assets/logos/Aludra-logo.svg";

import { Roboto, Open_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const openSans = Open_Sans({
  weight: "800",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-start px-8"
      style={{
        backgroundImage: `url(${PavanaBg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="space-y-6">
        <div
          className={`text-white font-bold text-6xl md:text-8xl text-left md:space-y-4 sm:px-8`}
        >
          <p>Bringing equilibrium </p>
          <p>back to our air composition</p>
        </div>
      </div>
      <div className="space-y-6 mt-6 w-5/6">
        <div className={`text-white text-4xl text-left md:space-y-4 sm:px-8`}>
          <p className="leading-relaxed">
            Cutting-edge CO2 mitigation tech dominates emissions management,
            showcasing prowess in battling environmental pollutants with
            unparalleled mastery and precision.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 pr-12 pb-5 hidden md:block">
        <Link href="/">
          <Image src={AludraLogo} alt="Ozgard Logo" height={80} className="" />
        </Link>
      </div>
    </div>
  );
}
