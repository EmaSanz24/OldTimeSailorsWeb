"use client";
import { useParams } from "next/navigation";
import FamilyLanding from "./FamilyLanding";
import PowerLanding from "./PowerLanding";

export const GigType = ({ data }) => {
  const currentEvent = useParams();
  const normalize = (str) => str.toLowerCase().replace(/\s+/g, "-");
  const matchingEvent = data.find((item) => normalize(item.event) === currentEvent.event);

  console.log(matchingEvent);

  return (
    <div>
      <div className="w-screen h-dvh bg-beigePatternMobile md1:bg-beigePatternTablet xl:bg-beigePattern bg-contain pb-[18px] md1:pb-[44px] xl:pb-[40px] 2k:pb-[52px] 4k:pb-[64px]">
        {matchingEvent.typeOfShow === "Family" ? <FamilyLanding data={matchingEvent} /> : <PowerLanding data={matchingEvent} />}
      </div>
    </div>
  );
};
export default GigType;
