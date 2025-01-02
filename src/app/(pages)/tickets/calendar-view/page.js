import List from "@/components/List";
import MainDiv from "@/components/MainDiv";

export const metadata = {
  title: "Tickets",
  description: "Find out where are we playing next",
  openGraph: {
    title: "Tickets",
    description: "Find out where are we playing next",
    images: [
      {
        url: "/assets/opengraph-image.png",
        alt: "Old Time Sailors",
      },
    ],
  },
};

const formatMarkers = (markersApiResponse) => {
  return markersApiResponse.data.map((marker) => ({
    id: marker.id,
    markerPosition: marker.attributes.markerPosition,
    event: marker.attributes.event,
    location: marker.attributes.location,
    date: marker.attributes.date,
    ticketsURL: marker.attributes.ticketsURL,
    venueInfo: marker.attributes.venueInfo,
    gigStartTime: marker.attributes.gigStartTime,
    gigFinishTime: marker.attributes.gigFinishTime,
    typeOfShow: marker.attributes.typeOfShow,
  }));
};

const fetchMarkers = async () => {
  try {
    const res = await fetch(`${process.env.BACKEND_API}/markers?populate=*`);
    if (!res.ok) {
      throw new Error(`Failed to fetch markers: ${res.status} ${res.statusText}`);
    }
    const markers = await res.json();
    const formattedMarkers = formatMarkers(markers);

    return formattedMarkers;
  } catch (error) {
    console.error("Error fetching markers:", error);
    throw error;
  }
};

const CalendarView = async () => {
  const markersList = await fetchMarkers();

  return (
    <MainDiv className="w-screen h-dvh bg-beigePatternMobile md1:bg-beigePatternTablet xl:bg-beigePattern bg-contain pt-[77px] xs:pt-[92px] sm:pt-[140px] fullHD:pt-[172px] 2k:pt-[204px] 4k:pt-[268px] pb-[18px] md1:pb-[44px] xl:pb-[40px] 2k:pb-[52px] 4k:pb-[64px]">
      <List markersList={markersList}></List>
    </MainDiv>
  );
};

export default CalendarView;
