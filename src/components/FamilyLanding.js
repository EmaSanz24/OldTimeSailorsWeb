import FamilyLaptop from "./FamilyLaptop";
import FamilyTablet from "./FamilyTablet";
import { FamilyMobileS } from "./FamilyMobileS";
import { FamilyMobileM } from "./FamilyMobileM";
import { FamilyMobileL } from "./FamilyMobileL";
import FamilyLaptopL from "./FamilyLaptopL";
import Family1360 from "./Family1360";
import FamilyDesktop from "./FamilyDesktop";
import FamilyDesktopL from "./FamilyDesktopL";

export const FamilyLanding = ({ data }) => {
  return (
    <div className="">
      {/* Mobile S - 320px */}

      <div className="block min-[375px]:hidden">
        <div className="w-[320px] min-h-screen relative mx-auto">
          <FamilyMobileS data={data} />
        </div>
      </div>
      {/* Mobile M - 375px */}
      <div className="hidden min-[375px]:block min-[425px]:hidden w-full">
        <div className="w-[375px] min-h-screen relative mx-auto">
          <FamilyMobileM data={data} />
        </div>
      </div>
      {/* Mobile L - 425px */}
      <div className="hidden min-[425px]:block min-[768px]:hidden">
        <div className="w-[425px] min-h-screen relative mx-auto">
          <FamilyMobileL data={data} />
        </div>
      </div>
      <div className="hidden min-[768px]:block min-[1024px]:hidden">
        <div className="w-[768px] min-h-screen relative mx-auto">
          <FamilyTablet data={data} />
        </div>
      </div>
      {/* Laptop - 1024px */}
      <div className="hidden min-[1024px]:block min-[1360px]:hidden">
        <div className="w-[1024px] min-h-screen relative mx-auto">
          <FamilyLaptop data={data} />
        </div>
      </div>
      <div className="hidden min-[1360px]:block min-[1440px]:hidden">
        <div className="w-[1360px] min-h-screen relative mx-auto">
          <Family1360 data={data} />
        </div>
      </div>
      {/* Laptop L - 1440px */}
      <div className="hidden min-[1440px]:block min-[1680px]:hidden">
        <div className="w-[1440px] min-h-screen relative mx-auto">
          <FamilyLaptopL data={data} />
        </div>
      </div>
      <div className="hidden min-[1680px]:block min-[1920px]:hidden">
        <div className="w-[1680px] min-h-screen relative mx-auto">
          <FamilyDesktop data={data} />
        </div>
      </div>
      <div className="hidden min-[1920px]:block">
        <div className="w-[1920px] min-h-screen relative mx-auto">
          <FamilyDesktopL data={data} />
        </div>
      </div>
    </div>
  );
};
export default FamilyLanding;
