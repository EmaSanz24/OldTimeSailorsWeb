"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchEvents } from "@/helpers/fetchData";
import FamilyLanding from "@/components/FamilyLanding";
import PowerLanding from "@/components/PowerLanding";
import Loading from "./loading";
import MainDiv from "@/components/MainDiv";

const GigLanding = () => {
  const { event } = useParams();
  const [currentEvent, setCurrentEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const events = await fetchEvents();

        const foundEvent = events.find((e) => e.event.toLowerCase().replace(/\s+/g, "-") === event);

        if (foundEvent) {
          setCurrentEvent(foundEvent);
        } else {
          throw new Error(`Event "${event}" not found.`);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setIsLoading(false);
      }
    };

    if (event) {
      fetchData();
    }
  }, [event]);
  if (isLoading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (!currentEvent) return <div>No event found</div>;

  if (currentEvent.typeOfShow === "Family") {
    return (
      <MainDiv className="w-screen h-dvh bg-beigePatternMobile md1:bg-beigePatternTablet xl:bg-beigePattern bg-contain pb-[18px] md1:pb-[44px] xl:pb-[40px] 2k:pb-[52px] 4k:pb-[64px] ">
        <FamilyLanding data={currentEvent} />
      </MainDiv>
    );
  }

  return (
    <MainDiv className="w-screen h-dvh bg-darkBlue bg-contain pb-[18px] md1:pb-[44px] xl:pb-[40px] 2k:pb-[52px] 4k:pb-[64px]">
      <PowerLanding data={currentEvent} />
    </MainDiv>
  );
};

 <MainDiv className="w-screen h-dvh bg-beigePatternMobile md1:bg-beigePatternTablet xl:bg-beigePattern bg-contain pb-[18px] md1:pb-[44px] xl:pb-[40px] 2k:pb-[52px] 4k:pb-[64px]">
  <FamilyLanding />
</MainDiv>;
export default GigLanding;
