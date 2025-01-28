import Link from "next/link";
import { FaCalendar, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";
const formatDate = (inputDate) => {
  // Parse the input date
  const [day, month, year] = inputDate.split("/").map(Number);

  // Create a Date object
  // Note: months in JavaScript Date are 0-indexed, so we subtract 1 from the month
  const date = new Date(year, month - 1, day);

  // Array of day names
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Array of month names
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Format the date
  const formattedDate = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

  return formattedDate;
};
export const FamilyTablet = ({ data }) => {
  const { event, location, date, ticketsURL, venueInfo, gigStartTime, gigFinishTime } = data;
  const formattedDate = formatDate(date);
  const eventURL = "/eventURL";
  const router = useRouter();
  return (
    <div className="pt-[120px] pb-[36px]">
      {/* Main container with border */}
      <div className="border-[3px] border-darkBeige p-4 mx-6 relative">
        <div className="text-left">
          <h1 className="font-titles lowercase leading-none">
            <span className="text-darkBlue text-[40px]">old time sailors </span>
            <span className="text-lightRed text-[40px] ">at</span>
            <br />
            <span className="text-lightRed text-[40px] ">{event}</span>
          </h1>
          <p className="text-darkBlue text-[25px] font-txt lowercase">{location}</p>

          <div className="absolute w-64 top-20 -right-4">
            <div className="bg-darkBlue p-6 rounded-3xl">
              <h3 className="text-lightRed text-[25px] font-titles leading-none">
                <p>more about</p>
                <p>the venue</p>
              </h3>
              <div className="mt-0.5">
                <p className="text-beige font-txt leading-tight text-[15px]">
                  {venueInfo}A rural escape built by the community, for the community in the heart of Newquay. A venue for the whole family with
                  seating options.
                </p>
                <Link href={eventURL}>
                  <p className="text-beige mt-1 font-titles underline text-[16px]">contact the venue for + info</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-more-dashed my-4" />
        {/* Event Info  */}
        <div className="space-y-6">
          <div className="flex flex-row gap-5">
            <div className="space-y-3">
              {[
                { icon: FaLocationDot, text: `${event}` },
                { icon: FaCalendar, text: `${formattedDate}` },
                { icon: FaClock, text: `${gigStartTime} to ${gigFinishTime}` },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-darkBlue font-txt">
                  <Icon className="text-[18px]" />
                  <span className="text-[18px]">{text}</span>
                </div>
              ))}
            </div>

            <div className="relative mt-8">
              <Link
                className="absolute inset-0 flex flex-col items-center justify-center bg-lightRed text-beige octagon-tickets max-w-[230px]"
                href={ticketsURL}
                target="_blank"
              >
                <h3 className="font-txt uppercase justify-center text-[30px] "> buy tickets</h3>
              </Link>
            </div>
          </div>
          <p className="text-[20px] font-txt text-darkBlue text-left leading-8 pt-1 pb-5">
            You are invited to board the Sailorette and join the plentiful crew, 'The Old Time Sailors', for a night of footstomping, dancing and
            singing! You will be sailing back to the 19th century for an immersive experience of traditional seafaring music performed in a way you
            have never seen before. The Motley Crew and their plethora of traditional and eclectic instruments will take you back to the time of
            clashing tankards, and drunken debauchery. Sing and dance along like a drunken sailor as the band perform centuries old folk and shanty
            songs. Fancy dress is encouraged, so pull out your best seafaring garments me hearties and join the festivities.
          </p>
        </div>
      </div>
      {/* Media Section */}
      <div className="w-full h-[auto] relative pt-5">
        <div className="relative h-[220px] ">
          {/* Video */}
          <div className="absolute -top-12 -left-4 w-[460px] h-[280px] ">
            <Image src="/assets/videoBox.webp" alt="Video Frame" width={460} height={100} className="h-[300px]" />
            <div className="absolute inset-0 flex items-center justify-center -mb-2">
              <video
                controls
                preload="none"
                poster={"/assets/thumbnailvideo.webp"}
                className="ml-[30px] w-[95%] h-[82%] mt-[2px] object-cover border-darkBlue border-[10px] rounder-sm z-20 shadow-gray-500 shadow-[2px_-2px_5px_rgba(0,0,0,0.3)] hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
              >
                <source src="/assets/familyVideo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          {/* Photo 2  */}
          <div className="absolute right-[8px] -top-12 w-[350px] z-10 ">
            <Image
              src="/assets/familyPhoto2.webp"
              alt="Musicians"
              width={1200}
              height={1200}
              className="w-full shadow-gray500 shadow-[3px_3px_3px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>
        {/* Lower Photos  */}
        <div className="relative h-[750px] mx-5 mb-4">
          <div className="absolute left-[0px] -top-[5px] z-20 w-1/2">
            <Image
              src="/assets/familyPhoto1.webp"
              alt="
            Performance"
              width={350}
              height={320}
              className="z-10 h-[320px] shadow-gray-500 shadow-[0px_3px_3px_rgba(0,0,0,0.3)]"
            />
            <div className="relative" onClick={() => router.back()} role="button" tabIndex={0}>
              <Image
                src="/assets/arrow2.webp"
                alt="More gigs"
                width={580}
                height={440}
                className="absolute -left-[18px] top-[60px] w-[290px] h-[110px] cursor-pointer"
              />

              <p className="absolute inset-0 font-titles text-beige w-3/4 text-center ml-4 top-[80px] text-[50px]">more gigs</p>
            </div>
          </div>
          <div className="absolute -right-[15px] top-[100px] w-[450px] h-[200px] z-10 ">
            <Image src="/assets/familyPhoto3.webp" alt="crowd" width={800} height={800} className="w-full h-auto " />
          </div>
        </div>
        {/* Title */}
        <div className="absolute -bottom-[5px] left-[15px] z-10">
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-col leading-[75px] mb-10">
              <p className="text-darkBlue font-titles text-[90px]">family</p>
              <p className="text-darkBlue font-titles text-[90px] ">show</p>
            </div>
            <div className="text-lightRed text-[15px] flex flex-col">
              <Image src="/assets/anchor.webp" alt="Anchor" width={70} height={70} className="ml-[25px] rotate-12 mb-4" />
              <div className="-ml-[50px] mb-[30px] leading-none tracking-widest font-txt uppercase text-[20px]">
                <p>a traditional sailor show,</p>
                <p>sing along and dance with us!</p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/drawing2.webp"
          alt="Background Drawing"
          width={300}
          height={300}
          className="absolute -bottom-[15px] right-[0px] z-20 brightness-[78%] contrast-[91%] opacity-[70%]"
        />
      </div>
    </div>
  );
};
export default FamilyTablet;
