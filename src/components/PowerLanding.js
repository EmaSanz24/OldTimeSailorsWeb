"use client";
import { useEffect, useRef } from "react";
import PowerTablet from "./PowerTablet";
import PowerLaptop from "./PowerLaptop";
import { Power1360 } from "./Power1360";
import { PowerMobileS } from "./PowerMobileS";
import { PowerMobileM } from "./PowerMobileM";
import { PowerMobileL } from "./PowerMobileL";
import { PowerLaptopL } from "./PowerLaptopL";
import { PowerDesktop } from "./PowerDesktop";
import PowerDesktopL from "./PowerDesktopL";

export const PowerLanding = ({ data }) => {

  return (
    <div
      className="min-h-screen h-full w-full bg-cover overflow-y-hidden bg-darkBlue scroll-smooth"
    >
      <div className="transform-gpu">
        {/* Mobile S - 320px */}
        <div className="block min-[375px]:hidden">
          <div className="w-[320px] min-h-full relative mx-auto">
            <PowerMobileS data={data} />
          </div>
        </div>

        {/* Mobile M - 375px */}
        <div className="hidden min-[375px]:block min-[425px]:hidden w-full">
          <div className="w-[375px] min-h-full relative mx-auto">
            <PowerMobileM data={data} />
          </div>
        </div>
        {/* Mobile L - 425px */}
        <div className="hidden min-[425px]:block min-[768px]:hidden">
          <div className="w-[425px] min-h-full relative mx-auto">
            <PowerMobileL data={data} />
          </div>
        </div>
        <div className="hidden min-[768px]:block min-[1024px]:hidden">
          <div className="w-[768px] min-h-full relative mx-auto">
            <PowerTablet data={data} />
          </div>
        </div>

        {/* Laptop - 1024px */}
        <div className="hidden min-[1024px]:block min-[1360px]:hidden">
          <div className="w-[1024px] min-h-screen relative mx-auto">
            <PowerLaptop data={data} />
          </div>
        </div>
        {/* Laptop - 1360px */}
        <div className="hidden min-[1360px]:block min-[1440px]:hidden">
          <div className="w-[1360px] min-h-full relative mx-auto">
            <Power1360 data={data} />
          </div>
        </div>
        {/* Laptop L - 1440px */}
        <div className="hidden min-[1440px]:block min-[1600px]:hidden">
          <div className="w-[1440px] min-h-full relative mx-auto">
            <PowerLaptopL data={data} />
          </div>
        </div>
        {/* Desktop - 1600px */}
        <div className="hidden min-[1600px]:block min-[1920px]:hidden">
          <div className="w-[1600px] min-h-full relative mx-auto">
            <PowerDesktop data={data} />
          </div>
        </div>
        {/* Desktop - 1920px */}
        <div className="hidden min-[1920px]:block">
          <div className="w-[1920px] min-h-full relative mx-auto">
            <PowerDesktopL data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PowerLanding;
