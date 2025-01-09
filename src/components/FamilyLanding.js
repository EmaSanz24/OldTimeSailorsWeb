import FamilyLaptop from "./FamilyLaptop";
import FamilyMobile from "./FamilyMobile";
import FamilyTablet from "./FamilyTablet";

export const FamilyLanding = async () => {
  return (
    <div className="min-h-screen bg-cover bg-beigePatternMobile overflow-auto">
      <div className="block min-[768px]:hidden ">
        <FamilyMobile />
      </div>
      <div className="hidden min-[768px]:block min-[1024px]:hidden">
        <FamilyTablet />
      </div>
      <div className="hidden min-[1024px]:block">
        <FamilyLaptop />
      </div>
    </div>
  );
};
export default FamilyLanding;
