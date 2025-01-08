import Link from "next/link";
import Image from "next/image";
import blueFrame from "../../public/assets/blue-frame.png";
import redFrame from "../../public/assets/red-frame.png";
import footerImage from "../../public/assets/view-selector-image.JPEG";

const ViewSelector = async () => {
  return (
    <div className="flex flex-col w-full md3:flex-row space-y-8 max-w-[1200px] pt-24 px-6 bg-beigePatternMobile bg-cover lg:h-[650px] md1:pt-40 1xl:pt-56 justify-evenly">
      <div className="flex flex-col gap-8 items-center justify-center">
        <Link href="/tickets/map-view" className="w-full max-w-[420px] lg:max-w-[620px]">
          <div className="relative w-full">
            <Image src={blueFrame} alt="Map Option" className="w-full h-auto" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <h2 className="text-lightRed text-2xl lg:text-4xl font-titles">view gigs on</h2>
              <h2 className="text-darkBlue text-5xl lg:text-7xl font-titles">map</h2>
            </div>
          </div>
        </Link>
        <Link href="/tickets/calendar-view" className="w-full max-w-[420px] lg:max-w-[620px]">
          <div className="relative w-full">
            <Image src={redFrame} alt="Calendar Option" className="w-full h-auto" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <h2 className="text-darkBlue text-2xl lg:text-4xl font-titles">view gigs on</h2>
              <h2 className="text-lightRed text-5xl lg:text-7xl font-titles">Calendar</h2>
            </div>
          </div>
        </Link>
      </div>

      <div className="w-full  flex justify-center">
        <Image src={footerImage} alt="Footer Image" className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[1000px] lg:h-[auto]" />
      </div>
    </div>
  );
};

export default ViewSelector;
