"use client";

import { Calendar2 } from "iconsax-react";
import PageNavbar, {
  PageNavbarLeftContent,
  PageNavbarRightContent,
} from "@/components/layout/PageNavbar";
import PageContent from "@/components/layout/PageContent";
import AbsorbenPerformance from "@/components/cards/AbsorbenPerformance";
import Co2Captured from "@/components/cards/Co2Captured";
import BasicInfo from "@/components/cards/BasicInfo";
import ProfileImage from "@/components/assets/profile.png";
import PavanaLogo from "@/components/assets/logos/Pavana-logo.svg";
import Image from "next/image";
import FunctionUnit from "@/components/cards/FunctionUnit";
import Summary from "@/components/cards/Summary";
import { currentDate } from "@/helpers/dates.helper";

function Dashboard() {
  return (
    <div>
      <PageNavbar>
        <PageNavbarLeftContent>
          <Image
            src={PavanaLogo}
            alt="Pavana Logo"
            // width={40}
            height={50}
          />
        </PageNavbarLeftContent>

        <PageNavbarRightContent>
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
        </PageNavbarRightContent>
      </PageNavbar>

      <PageContent>
        <div className="flex gap-2 font-medium items-center">
          <Calendar2 variant="Bold" size={18} />
          <p>Date: {currentDate()}</p>
        </div>
        <div className="space-y-4 columns-1 sm:columns-2 lg:columns-2">
          <div className="break-inside-avoid-column space-y-4">
            <BasicInfo />
          </div>

          <div className="break-inside-avoid-column space-y-4">
            <AbsorbenPerformance />
          </div>

          <div className="break-inside-avoid-column space-y-4">
            <Co2Captured />
          </div>

          <div className="hidden sm:hidden md:hidden lg:block">
            <div className="space-y-4 columns-1 sm:columns-1 lg:columns-2">
              <div className="break-inside-avoid-column space-y-4">
                <FunctionUnit />
              </div>

              <div className="break-inside-avoid-column space-y-4">
                <Summary />
              </div>
            </div>
          </div>

          <div className="block sm:block md:block lg:hidden">
            <div className="space-y-4 columns-1 sm:columns-1 lg:columns-2">
              <div className="break-inside-avoid-column space-y-4">
                <Summary />
              </div>

              <div className="break-inside-avoid-column space-y-4">
                <FunctionUnit />
              </div>
            </div>
          </div>
        </div>
      </PageContent>
    </div>
  );
}

export default Dashboard;
