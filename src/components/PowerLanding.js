import PowerTablet from "./PowerTablet";
import PowerLaptop from "./PowerLaptop";
import { Power1360 } from "./Power1360";
import { PowerMobileS } from "./PowerMobileS";
import { PowerMobileM } from "./PowerMobileM";
import { PowerMobileL } from "./PowerMobileL";
import { PowerLaptopL } from "./PowerLaptopL";
import { PowerDesktop } from "./PowerDesktop";
import PowerDesktopL from "./PowerDesktopL";
import { useEffect, useCallback } from "react";

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export const PowerLanding = async ({ data }) => {
  // Optimizar la función de scroll con useCallback
  const handleScroll = useCallback(
    debounce(() => {
      requestAnimationFrame(() => {
        // Lógica de scroll si es necesaria
      });
    }, 16),
    []
  );

  useEffect(() => {
    // Prevenir scroll durante la carga inicial
    document.body.style.overflowY = "hidden";

    // Permitir scroll después de que todo esté listo
    setTimeout(() => {
      document.body.style.overflowY = "auto";
    }, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflowY = "auto";
    };
  }, [handleScroll]);

  return (
    <div
      className="h-full bg-cover bg-darkBlue overflow-auto scroll-smooth"
      style={{
        WebkitOverflowScrolling: "touch",
        transform: "translate3d(0,0,0)",
        backfaceVisibility: "hidden",
        perspective: 1000,
        willChange: "scroll-position",
      }}
    >
      <div className="transform-gpu">
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
        <div className="hidden min-[1024px]:block min-[1360px]:hidden">
          <div className="w-[1024px] min-h-screen relative mx-auto">
            <PowerLaptop data={data} />
          </div>
        </div>
        {/* Laptop - 1360px */}
        <div className="hidden min-[1360px]:block min-[1440px]:hidden">
          <div className="w-[1360px] min-h-screen relative mx-auto">
            <Power1360 data={data} />
          </div>
        </div>
        {/* Laptop L - 1440px */}
        <div className="hidden min-[1440px]:block min-[1600px]:hidden">
          <div className="w-[1440px] min-h-screen relative mx-auto">
            <PowerLaptopL data={data} />
          </div>
        </div>
        {/* Desktop - 1600px */}
        <div className="hidden min-[1600px]:block min-[1920px]:hidden">
          <div className="w-[1600px] min-h-screen relative mx-auto">
            <PowerDesktop data={data} />
          </div>
        </div>
        {/* Desktop - 1920px */}
        <div className="hidden min-[1920px]:block">
          <div className="w-[1920px] min-h-screen relative mx-auto">
            <PowerDesktopL data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PowerLanding;
