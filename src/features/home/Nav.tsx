import React, { useState } from "react";

import { LinkItem, navLinks } from "@/features/home/enum/nav-links";
import Image from "next/image";
import PavanaLogo from "@/components/assets/logos/Pavana-logo.svg";
import { HambergerMenu } from "iconsax-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Links {
  activeSection: string;
}

const Nav = ({ activeSection }: Links) => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>();

  const handleMenuOnClick = (link: LinkItem) => {
    const url = link.isLink && link.url ? link.url : `#${link.id}`;
    router.push(url);
  };

  return (
    <div className="w-screen fixed mt-8 py-0 pl-4 md:pl-8 pr-6 md:pr-16">
      <div className="flex flex-row items-center justify-between">
        <Link href="/">
          <Image
            src={PavanaLogo}
            alt="Pavana Logo"
            height={100}
            className="hidden md:block"
          />
          <Image
            src={PavanaLogo}
            alt="Pavana Logo"
            height={80}
            className="block md:hidden"
          />
        </Link>
        <div
          className={`flex flex-row items-center hidden md:block justify-between ${
            navLinks[activeSection]?.className || "text-white"
          }  text-2xl`}
        >
          {Object.values(navLinks).map((link, index) => (
            <Link
              href={link?.url || `#${link.id}`}
              key={index}
              className={`px-8 cursor-pointer ${
                activeSection == link.id && "text-[#2ea5e4] font-medium"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="block md:hidden">
          <HambergerMenu
            size={32}
            className="text-white cursor-pointer"
            onClick={() => {
              setDropdownOpen((val) => !val);
            }}
          />
          {dropdownOpen && (
            <div className="flex justify-end relative mx-0">
              <div className="w-40 mt-2 bg-white border-zinc-200 shadow-lg border rounded-xl absolute text-sm text-gray-700">
                {Object.values(navLinks).map((link, index) => (
                  <div className="my-2 py-2 px-4 cursor-pointer rounded-none hover:bg-slate-100">
                    <button
                      className="flex w-full text-left duration-200 items-center gap-2"
                      onClick={() => handleMenuOnClick(link)}
                    >
                      {link.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
