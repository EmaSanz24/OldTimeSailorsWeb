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
    <div className="relative border-b border-y-2 border-lightRed py-2 mx-1 md:mx-3 lg:mx-20 xl:mx-40 2xl:mx-80">
      <div className="flex justify-between items-center">
        <div className="space-y-1 md:space-y-3 pr-2 w-3/4">
          <div className="flex items-baseline gap-1">
            <span
              className="text-darkBlue font-numbers text-xl md:text-3xl 
            "
            >
              {longDate}
            </span>
            <span className="font-txt text-darBlue md:text-2xl">- {event.gigStartTime}</span>
            <span className="font-txt text-darBlue md:text-2xl">- {event.gigFinishTime}</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-titles text-lightRed">{event.event}</h2>
          <p className="text-darkBlue  font-txt text-xl md:text-3xl">{event.location}</p>
        </div>
        <Link
          href={`/tickets/${event.event.replace(/\s+/g, "-").toLowerCase()}`}
          rel="noopener noreferrer"
          className="flex items-center justify-center octagon-tickets bg-lightRed md:w-1/8"
        >
          <p className="text-center text-2xl md:text-[42px] font-titles text-beige">+ info</p>
        </Link>
      </div>
    </div>
  );
};

export default ListItem;
