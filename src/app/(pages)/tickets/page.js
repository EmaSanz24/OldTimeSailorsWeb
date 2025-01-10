import MainDiv from "@/components/MainDiv";
import ViewSelector from "@/components/ViewSelector";

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

const Tickets = () => {
  return (
    <MainDiv className="w-screen min-h-screen bg-beigePatternMobile md1:bg-beigePatternTablet xl:bg-beigePattern bg-contain">
      <ViewSelector></ViewSelector>
    </MainDiv>
  );
};

export default Tickets;
