"use client";

import { Calendar2 } from "iconsax-react";
import PageContent from "@/components/layout/PageContent";
import AbsorbenPerformance from "@/components/cards/AbsorbenPerformance";
import Co2Captured from "@/components/cards/Co2Captured";
import BasicInfo from "@/components/cards/BasicInfo";
import FunctionUnit from "@/components/cards/FunctionUnit";
import Summary from "@/components/cards/Summary";
import { currentDate } from "@/helpers/dates.helper";
import ProtectedPage from "@/components/layout/ProtectedPage";
import Navbar from "@/components/ui/Navbar";

const Dashboard = () => {
  return (
    <ProtectedPage>
      <Navbar />
      <PageContent>
        <div className="flex gap-2 font-medium items-center">
          <Calendar2 variant="Bold" size={18} className="text-black" />
          <p className="text-black">Date: {currentDate()}</p>
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
    </ProtectedPage>
  );
};

export default Dashboard;
