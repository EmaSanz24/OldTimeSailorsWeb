import PowerMobile from "./PowerMobile";
import PowerTablet from "./PowerTablet";
import PowerLaptop from "./PowerLaptop";

export const PowerLanding = async () => {
  return (
    <div className="min-h-screen bg-cover bg-darkBlue overflow-auto">
      <div className="block min-[768px]:hidden">
        <PowerMobile />
      </div>
      <div className="hidden min-[768px]:block min-[1024px]:hidden">
        <PowerTablet />
      </div>
      <div className="hidden min-[1024px]:block">
        <PowerLaptop />
      </div>
    </div>
  );
};
export default PowerLanding;
