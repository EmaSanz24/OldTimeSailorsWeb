"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchEvents } from "@/helpers/fetchData";
import FamilyLanding from "@/components/FamilyLanding";
import PowerLanding from "@/components/PowerLanding";
import Loading from "./loading";
import MainDiv from "@/components/MainDiv";
import { useNavbarColor } from "@/context/NavbarColorProvider";
const GigLanding = () => {
  const { event } = useParams();
  const [currentEvent, setCurrentEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setNavbarColor } = useNavbarColor();

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

  useEffect(() => {
    if (currentEvent) {
      setNavbarColor(currentEvent.typeOfShow === "Family" ? "dark" : "light");
    }
  }, [currentEvent, setNavbarColor]);

  if (isLoading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (!currentEvent) return <div>No event found</div>;

  return (
    <MainDiv
      className={`
        w-screen min-h-dvh xsm:pb-[23px] xs:pb-[65px] md1:pb-[45px] lg:pb-[180px] 1xl:pb-[200px] 1xxl:pb-[250px] 3xl:pb-[300px] 4xl:pb-[550px] fullHD:pb-[1000px]
    ${currentEvent.typeOfShow === "Family" ? " bg-beigePattern bg-contain" : " bg-darkBlue bg-contain"}`}
    >
      <div className="flex-1 h-full">
        {currentEvent.typeOfShow === "Family" ? <FamilyLanding data={currentEvent} /> : <PowerLanding data={currentEvent} />}
      </div>
    </MainDiv>
  );
};
export default GigLanding;
