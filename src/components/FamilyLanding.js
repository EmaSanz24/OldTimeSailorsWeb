import FamilyLaptop from "./FamilyLaptop";
import FamilyMobile from "./FamilyMobile";
import FamilyTablet from "./FamilyTablet";
import { FamilyMobileS } from "./FamilyMobileS";
import { FamilyMobileM } from "./FamilyMobileM";
import { FamilyMobileL } from "./FamilyMobileL";

export const FamilyLanding = async () => {
  return (
    <div className="min-h-screen bg-cover bg-beigePatternMobile overflow-auto">
      {/* Mobile S - 320px */}
      <div className="block min-[375px]:hidden">
        <div className="w-[320px] min-h-screen relative mx-auto">
          <FamilyMobileS />
        </div>
      </div>
      {/* Mobile M - 375px */}
      <div className="hidden min-[375px]:block min-[425px]:hidden w-full">
        <div className="w-[375px] min-h-screen relative mx-auto">
          <FamilyMobileM />
        </div>
      </div>
      {/* Mobile L - 425px */}
      <div className="hidden min-[425px]:block min-[768px]:hidden">
        <div className="w-[425px] min-h-screen relative mx-auto">
          <FamilyMobileL />
        </div>
      </div>
      <div className="hidden min-[768px]:block min-[1024px]:hidden">
        <div className="w-[768px] min-h-screen relative mx-auto">
          <FamilyTablet />
        </div>
      </div>
      <div className="hidden min-[1024px]:block">
        <div className="w-[1440px] min-h-screen relative mx-auto">
          <FamilyLaptop />
        </div>
      </div>
    </div>
  );
};
export default FamilyLanding;
