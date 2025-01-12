import Link from "next/link";
import { FaCalendar, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { memo } from "react";

const VideoComponent = memo(() => (
  <div className="absolute -left-0 -top-2.5 w-[298px] h-[140px]">
    <Image src="/assets/videoBox.png" alt="Video frame" width={250} height={100} quality={50} priority={true} className="transform-gpu" />
    <div className="absolute inset-0 flex items-center justify-center">
      <video
        controls
        preload="none"
        poster={"/assets/thumbnailvideo.webp"}
        className="w-[82%] h-[90%] mt-3 -ml-6 object-cover border-darkBlue border-[6px] rounded-sm z-20 shadow-gray-500 shadow-[2px_-2px_5px_rgba(0,0,0,0.3)] hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
      >
        <source src="/assets/family/video.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
));

const EventDescription = memo(() => (
  <div className="text-[12px] pb-5 text-darkBlue font-txt">
    <p className="leading-relaxed [&:not(:last-child)]:mb-0">
      You are invited to board the Sailorette and join the plentiful crew, 'The Old Time Sailors', for a night of footstomping, dancing and singing!
    </p>
    <p className="leading-relaxed [&:not(:last-child)]:mb-0">
      You will be sailing back to the 19th century for an immersive experience of traditional seafaring music performed in a way you have never seen
      before.
    </p>
    <p className="leading-relaxed [&:not(:last-child)]:mb-0">
      The Motley Crew and their plethora of traditional and eclectic instruments will take you back to the time of clashing tankards, and drunken
      debauchery. Sing and dance along like a drunken sailor as the band perform centuries old folk and shanty songs.
    </p>
    <p className="leading-relaxed">Fancy dress is encouraged, so pull out your best seafaring garments me hearties and join the festivities.</p>
  </div>
));
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
export const FamilyMobileL = async ({ data }) => {
  const { event, location, date, ticketsURL, venueInfo, gigStartTime, gigFinishTime } = data;
  const formattedDate = formatDate(date);
  return (
    <>
      <div className="relative -bottom-[75px]">
        {/* Contenedor principal con borde */}
        <div className="border border-darkBeige p-4 mx-4 relative">
          <div className="text-left font-titles">
            <h1 className="font-bold">
              <span className="text-darkBlue text-xl">old time sailors</span>
              <span className="text-lightRed text-xl"> at</span>
              <br />
              <span className="text-lightRed text-xl">{event}</span>
            </h1>
            <p className="text-darkBlue text-sm font-titles">{location}</p>
          </div>

          <div className="border-t-2 border-dashed border-darkBeige my-4" />

          <div className="absolute -right-[12px] top-20 w-44">
            <div className="bg-darkBlue p-3 rounded-2xl">
              <h3 className="text-lightRed text-lg font-bold font-titles leading-tight">
                more about
                <br />
                the venue
              </h3>
              <div className="mt-0.5">
                <p className="text-beige text-[9px] leading-tight font-txt">{venueInfo}</p>

                <p className="text-beige text-[9px] mt-1 font-titles underline">contact the venue for + info</p>
              </div>
            </div>
          </div>

          {/* Event info */}
          <div className="space-y-6">
            <div className="space-y-3">
              {[
                { icon: FaLocationDot, text: `${event}` },
                { icon: FaCalendar, text: `${formattedDate}` },
                { icon: FaClock, text: `${gigStartTime} to ${gigFinishTime}` },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-darkBlue font-semibold">
                  <Icon className="text-[10px]" />
                  <span className="text-[9px]">{text}</span>
                </div>
              ))}

              <div className="relative h-[18px]">
                <Link
                  className="absolute inset-0 flex flex-row items-center justify-center bg-lightRed text-beige octagon-tickets"
                  style={{
                    "--octagon-width": "100px",
                    "--octagon-height": "28px",
                  }}
                  href={ticketsURL}
                  target="_blank"
                >
                  <h3 className="font-titles justify-center text-[12px]"> buy tickets</h3>
                </Link>
              </div>
              <EventDescription />
            </div>
          </div>
        </div>

        {/* Media section */}
        <div className="w-full h-[auto] relative -top-5 -left-2 mb-[70px]">
          <div className="relative h-[200px]">
            {/* Video */}
            <VideoComponent />
            {/* Photo 2 */}
            <div className="absolute -right-[2px] -top-4 w-[175px] z-10">
              <Image
                src="/assets/familyPhoto2.webp"
                alt="Musicians"
                width={180}
                height={170}
                quality={75}
                className="w-[180px] h-[170px] shadow-gray-500 shadow-[3px_3px_3px_rgba(0,0,0,0.3)]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Lower photos */}
          <div className="relative h-[200px]">
            <div className="absolute left-[26px] bottom-[86px] w-1/2 z-20">
              <Image
                src="/assets/familyPhoto1.webp"
                alt="Performance"
                width={185}
                height={185}
                quality={75}
                className="w-[185px] h-[185px] z-10 shadow-gray-500 shadow-[0px_3px_3px_rgba(0,0,0,0.3)]"
                loading="lazy"
              />
              <div className="relative">
                <Image
                  src="/assets/arrow2.webp"
                  alt="More gigs"
                  width={180}
                  height={55}
                  quality={75}
                  className="w-[180px] h-[55px] absolute right-[45px] -bottom-[65px]"
                  loading="lazy"
                />
                <Link href={"/tickets/calendar-view"}>
                  <p className="absolute inset-0 font-titles  text-beige left-[50px] top-5 text-[24px]">more gigs</p>
                </Link>
              </div>
            </div>

            <div className="absolute -right-[6px] bottom-[32px] w-[225px] h-[200px] z-10">
              <Image
                src="/assets/familyPhoto3.webp"
                alt="Crowd"
                width={400}
                height={400}
                quality={75}
                className="w-full h-auto shadow-[5px_0px_5px_rgba(0,0,0,0.3)]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Title */}
          <div className="absolute -bottom-[85px] left-[20px] z-10">
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-col leading-none">
                <p className="text-darkBlue text-[45px]  font-titles">family</p>
                <p className="text-darkBlue text-[45px]  font-titles">show</p>
              </div>
              <div className="text-lightRed text-[9px] flex flex-col gap-4">
                <Image
                  src="/assets/anchor.webp"
                  alt="Anchor"
                  width={30}
                  height={35}
                  quality={75}
                  className="w-[30px] h-[35px] rotate-12 ml-[15px]"
                  loading="lazy"
                />
                <div className="-ml-[40px] -mb-[8px] font-titles leading-none tracking-widest">
                  <p>a traditional sailor show,</p>
                  <p>sing along and dance with us!</p>
                </div>
              </div>
            </div>
          </div>

          <Image
            src="/assets/drawing2.webp"
            alt="Background drawing"
            width={150}
            height={110}
            quality={75}
            className="w-[150px] h-[110px] absolute -bottom-[93px] -right-[10px] z-20 contrast-[25%]"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};
