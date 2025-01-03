import Link from "next/link";
// import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const ViewSwitch = () => {
  const pathname = usePathname();
  // const [viewMode, setViewMode] = useState("map");

  // useEffect(() => {
  //   switch (pathname) {
  //     case "/tickets/map-view":
  //       setViewMode("map");
  //       break;
  //     case "/tickets/calendar-view":
  //       setViewMode("calendar");
  //       break;
  //     default:
  //       setViewMode("map");
  //       break;
  //   }
  // }, [pathname]);

  return (
    <div className="flex flex-row gap-0.5 w-full justify-end pr-3">
      <div
        className={`octagon-tickets ${
          pathname === "/tickets/map-view" ? "bg-darkBlue" : "bg-darkBeige"
        } flex items-center justify-center px-3 max-w-fit`}
      >
        <Link href="/tickets/map-view">
          <div>
            <p className="text-center text-l md:text-xl font-titles text-lightRed">Map</p>
          </div>
        </Link>
      </div>
      <div
        className={`octagon-tickets ${
          pathname === "/tickets/calendar-view" ? "bg-darkBlue" : "bg-darkBeige"
        } flex items-center justify-center px-3 max-w-fit`}
      >
        <Link href="/tickets/calendar-view">
          <div>
            <p className="text-center text-l md:text-xl font-titles text-lightRed">Calendar</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ViewSwitch;
