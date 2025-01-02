import Link from "next/link";

const ViewSelector = async () => {
  return (
    <div>
      <div className="">
        <Link href="/tickets/map-view">
          <div>
            <span className="text-lightRed">view gigs on</span>
            <span className="text-darkBlue">map</span>
          </div>
        </Link>
      </div>
      <div className="">
        <Link href="/tickets/calendar-view">
          <div>
            <span className="text-darkBlue">view gigs on</span>
            <span className="text-lightRed">calendar</span>
          </div>
        </Link>
      </div>
      {/* <Image></Image> */}
    </div>
  );
};

export default ViewSelector;
