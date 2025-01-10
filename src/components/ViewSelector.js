import Link from "next/link";
import Image from "next/image";
import { memo } from "react";
import blueFrame from "../../public/assets/blue-frame.png";
import redFrame from "../../public/assets/red-frame.png";
import footerImage from "../../public/assets/view-selector-image.JPEG";

// Componente memoizado para la opción de Map
const MapOption = memo(() => (
  <Link href="/tickets/map" className="w-full max-w-[420px] lg:max-w-[620px]">
    <div className="relative px-5">
      <Image
        src={blueFrame}
        alt="Map Option"
        width={620} // Ancho máximo que necesitarás
        height={300} // Ajusta según el aspect ratio de tu imagen
        className="w-full h-auto"
        quality={75}
        sizes="(max-width: 768px) 420px, 620px"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-lightRed text-2xl lg:text-4xl font-titles">
        view gigs on
        </h2>
        <h2 className="text-darkBlue text-5xl lg:text-7xl font-titles">map</h2>
      </div>
    </div>
  </Link>
));

// Componente memoizado para la opción de Calendar
const CalendarOption = memo(() => (
  <Link
    href="/tickets/calendar"
    className="w-full max-w-[420px] lg:max-w-[620px]"
  >
    <div className="relative px-5">
      <Image
        src={redFrame}
        alt="Calendar Option"
        width={620}
        height={300}
        className="w-full h-auto"
        quality={75}
        sizes="(max-width: 768px) 420px, 620px"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-darkBlue text-2xl lg:text-4xl font-titles">
        view gigs on        </h2>
        <h2 className="text-lightRed text-5xl lg:text-7xl font-titles">
          Calendar
        </h2>
      </div>
    </div>
  </Link>
));

// Componente memoizado para el dibujo
const DrawingImage = memo(() => {
  // Optimización CSS-first
  return (
    <div className="w-full flex justify-center px-5">
      <div className="relative w-full  max-w-[400px] md:max-w-[500px] lg:max-w-[1000px]">
        <Image
          src={footerImage}
          alt="Dibujo"
          sizes="(max-width: 768px) 400px, (max-width: 1024px) 500px, 1000px"
          className="object-contain"
          quality={50} // Reducido aún más
          priority={true}
          loading="eager"
        />
      </div>
    </div>
  );
});

const ViewSelector = async () => {
  return (
    <>
      {/* Main Content */}
      <div className="relative bg-beigePatternMobile bg-cover lg:right-[50px] top-[150px] w-full font-times flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex flex-col space-y-8 w-full lg:w-[1000px] lg:h-[550px] items-center lg:justify-center lg:ml-20">
          <MapOption />
          <CalendarOption />
        </div>
        <DrawingImage />
      </div>
    </>
  );
};

export default ViewSelector;
