//this page will be loaded when someone clicks on the + info button on the gigs viewer
//loading the information of the specific gig named on the url
import FamilyLanding from "@/components/FamilyLanding";
import PowerLanding from "@/components/PowerLanding";

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

const GigLanding = async () => {
  const markersList = await fetchMarkers();
  return (
    <div>
      {/* <FamilyLanding /> */}
      <PowerLanding />
    </div>
  );
};

export default GigLanding;
