import Link from "next/link";

const formatDateOrRange = (dateInput) => {
  try {
    // Helper function to format a single date
    const formatDate = (dateString) => {
      const [day, month, year] = dateString.split("/");
      const fullYear = year.length === 2 ? `20${year}` : year; // Handle 2-digit years
      const date = new Date(`${fullYear}-${month}-${day}`);
      if (isNaN(date)) throw new Error("Invalid date format");
      const options = { day: "2-digit", month: "long" };
      return new Intl.DateTimeFormat("en-US", options).format(date).replace(",", "");
    };

    // Check if input is a range (contains ' - ')
    if (dateInput.includes(" - ")) {
      const [startDate, endDate] = dateInput.split(" - ");
      const formattedStartDate = formatDate(startDate);
      const formattedEndDate = formatDate(endDate);
      return `${formattedStartDate} - ${formattedEndDate}`;
    } else {
      // Single date case
      return formatDate(dateInput);
    }
  } catch (error) {
    console.error(error.message);
    return "Invalid Date";
  }
};

const ListItem = ({ event }) => {
  let longDate = formatDateOrRange(event.date);
  return (
    <div className="relative border-b-3 border-lightRed py-2 mx-1 md:mx-[5%]">
      <div className="flex justify-between items-center">
        <div className="space-y-0 md:space-y-1 pr-2 w-3/4">
          <div className="flex items-baseline gap-1">
            <span
              className="text-[10px] text-darkBlue font-txt font-bold  xs:text-[15px] md:text-3xl truncate
            "
            >
              {longDate}
            </span>
            <span className="text-[10px] font-txt text-darkBlue xs:text-[15px] md:text-2xl truncate">- {event.gigStartTime}</span>
            <span className="text-[10px] font-txt text-darkBlue xs:text-[15px] md:text-2xl truncate">- {event.gigFinishTime}</span>
          </div>
          <h2 className="text-[12px] xs:text-[20px] md:text-[42px] font-titles text-lightRed leading-none ">{event.event.toLowerCase()}</h2>
          <p className="text-[11px] xs:text-[18px] text-darkBlue  font-txt  md:text-3xl">{event.location}</p>
        </div>
        <Link
          href={`/tickets/${event.event.replace(/\s+/g, "-").toLowerCase()}`}
          rel="noopener noreferrer"
          className="flex items-center justify-center services-octagon-link max-h-[50px] max-w-[170px] md:max-h-[80px] md:max-w-[260px] lg:max-w-[300px] 1xl:h-[100px] bg-lightRed md:w-1/8 lg:w-1/10"
        >
          <p className="text-center text-[25px] md:text-[38px] lg:text-[42px] 1xl:text-[46px] font-txt font-bold uppercase text-beige">+ info</p>
        </Link>
      </div>
    </div>
  );
};

export default ListItem;
