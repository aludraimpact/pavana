import { useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import ProfileImage from "@/components/assets/profile.png";
import PavanaLogo from "@/components/assets/logos/Pavana-logo.svg";
import TelkomLogo from "@/components/assets/logos/Telkom-logo.svg";

import PageNavbar, {
  PageNavbarLeftContent,
  PageNavbarRightContent,
} from "@/components/layout/PageNavbar";

const Navbar = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState<boolean>();

  const logout = () => {
    Cookies.remove("token");
    router.push("/");
  };

  const isMobile =
    Math.min(window.screen.width, window.screen.height) < 768 ||
    navigator.userAgent.indexOf("Mobi") > -1;

  return (
    <>
      <PageNavbar>
        <PageNavbarLeftContent>
          <Image
            src={PavanaLogo}
            alt="Pavana Logo"
            height={isMobile ? 30 : 50}
          />
        </PageNavbarLeftContent>

        <PageNavbarLeftContent>
          <div className="backdrop-blur-md bg-white/40 rounded-2xl">
            <Image
              src={TelkomLogo}
              alt="Telkom Logo"
              height={isMobile ? 40 : 70}
            />
          </div>
        </PageNavbarLeftContent>

        <PageNavbarRightContent
          onClick={() => setDropdownOpen((value) => !value)}
        >
          <div className="text-gray-500 md:flex gap-2 backdrop-blur-md bg-white/40 p-1 md:py-3 md:px-7 md:rounded-3xl rounded-full cursor-pointer">
            <Image
              src={ProfileImage}
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="hidden md:block">
              <p className="text-sm font-semibold text-gray-800">Steve Jobs</p>
              <p className="text-xs font-medium text-gray-700">Welcome back</p>
            </div>
          </div>
          {dropdownOpen && (
            <div className="flex justify-end relative mx-0">
              <div className="w-40 p-4 top-1 backdrop-blur-md bg-white/80 border-zinc-200 shadow-lg border rounded-xl absolute text-sm text-gray-700">
                <button onClick={logout} className="w-full text-left">
                  Sign out
                </button>
              </div>
            </div>
          )}
        </PageNavbarRightContent>
      </PageNavbar>
    </>
  );
};

export default Navbar;
