"use client";

import { usePathname } from "next/navigation";
import { useLoader } from "@/context/LoaderContext";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchEvents } from "@/helpers/fetchData";

const Footer = () => {
  const [isFooterBlack, setIsFooterBlack] = useState(true);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [isPowerEvent, setIsPowerEvent] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const defaultSettings = { loader: 1, photos: true };
  const settings = useLoader() || defaultSettings;

  useEffect(() => {
    const fetchData = async () => {
      if (params.event) {
        try {
          const events = await fetchEvents();
          const foundEvent = events.find(
            (e) => e.event.toLowerCase().replace(/\s+/g, "-") === params.event
          );
          setCurrentEvent(foundEvent);
          setIsPowerEvent(foundEvent?.typeOfShow === "Power");
        } catch (error) {
          console.error("Error fetching event:", error);
        }
      }
    };

    fetchData();
  }, [params.event]);

  const isPowerLandingPath = () => {
    return (
      pathname.startsWith("/tickets/") && currentEvent?.typeOfShow === "Power"
    );
  };

  useEffect(() => {
    if (
      pathname === "/" ||
      pathname === "/media" ||
      pathname === "/reviews" ||
      pathname === "/our-clients"
    ) {
      setIsFooterBlack(false);
    } else setIsFooterBlack(true);
  }, [pathname]);
  return (
    <footer
      className={`fixed bottom-0 w-screen flex justify-center items-center  ${
        pathname === "/" ? "py-0.5 xl:p-0.5 2k:py-2" : "py-0.5 md1:py-2"
      } ${
        isPowerLandingPath()
          ? "bg-darkBlue py-3 xl:py-4 2k:py-5"
          : ""
      }`}  
      style={{
        opacity: settings?.loader,
        pointerEvents: settings?.photos ? "auto" : "none",
      }}
    >
      <p
        className={`${
          isPowerLandingPath()
            ? "text-beige"
            : isFooterBlack
            ? "text-darkBlue"
            : "text-beige"
        } font-txt text-[9px] md1:text-lg md:text-xl xl:text-base 2k:text-3xl 4k:text-5xl uppercase `}
      >
        OLD TIME SAILORS LTD.®
      </p>
    </footer>
  );
};

export default Footer;
