import PagesWrapper from "@/wrappers/PagesWrapper";

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
const Tickets = async () => {
  return (
    <PagesWrapper>
      <h1>Tickets</h1>
    </PagesWrapper>
  );
};

export default Tickets;
