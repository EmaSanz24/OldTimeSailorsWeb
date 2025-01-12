import PowerTablet from "./PowerTablet";
import PowerLaptop from "./PowerLaptop";
import { PowerMobileS } from "./PowerMobileS";
import { PowerMobileM } from "./PowerMobileM";
import { PowerMobileL } from "./PowerMobileL";
import { PowerLaptopL } from "./PowerLaptopL";

export const PowerLanding = async ({ data }) => {
  return (
    <div className="min-h-screen bg-cover bg-darkBlue overflow-auto">
      {/* Mobile S - 320px */}
      <div className="block min-[375px]:hidden">
        <div className="w-[320px] min-h-screen relative mx-auto">
          <PowerMobileS data={data} />
        </div>
      </div>

      {/* Mobile M - 375px */}
      <div className="hidden min-[375px]:block min-[425px]:hidden w-full">
        <div className="w-[375px] min-h-screen relative mx-auto">
          <PowerMobileM data={data} />
        </div>
      </div>
      {/* Mobile L - 425px */}
      <div className="hidden min-[425px]:block min-[768px]:hidden">
        <div className="w-[425px] min-h-screen relative mx-auto">
          <PowerMobileL data={data} />
        </div>
      </div>
      <div className="hidden min-[768px]:block min-[1024px]:hidden">
        <div className="w-[768px] min-h-screen relative mx-auto">
          <PowerTablet data={data} />
        </div>
      </div>

      {/* Laptop - 1024px */}
      <div className="hidden min-[1024px]:block min-[1440px]:hidden">
        <div className="w-[1024px] min-h-screen relative mx-auto">
          <PowerLaptop data={data} />
        </div>
      </div>
      {/* Laptop L - 1440px */}
      <div className="hidden min-[1440px]:block">
        <div className="w-[1440px] min-h-screen relative mx-auto">
          <PowerLaptopL data={data} />
        </div>
      </div>
    </div>
  );
};
export default PowerLanding;
