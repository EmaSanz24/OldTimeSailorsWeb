import Link from "next/link";
import { FaCalendar, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { memo } from "react";

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
const EventDescription = memo(() => (
  <p className="text-sm pb-5 text-[#e9ddc7] font-txt text-pretty" translate="no">
    Heave ho and up she rises! Cast aside your compass, throw your maps overboard and join the mutinous crew of The Old Time Sailor as they set sail
    for the wild uninhabited islands of Irish Punk, Shanty Punk, Polka Rock, Romani Punk, Dark Cabaret, and Twisted Circus! 'Rock and row' with our 21
    strong crew of rebellious musicians as the navigate a voyage through the thrashing seas of Hevay Metal and Hard Rock on a genre bending adventure
    into uncharted waters, join in the Wall of Death and thrash it out with your shipmates. Get ready for vigorous vocals, emphatic energy, mosh pits
    and head banging: we play it live and we play it loud, but as always with The Old Time Sailors... be prepared to expect the unexpected!
  </p>
));

export const PowerMobileL = async ({ data }) => {
  const { event, location, date, ticketsURL, venueInfo, gigStartTime, gigFinishTime } = data;
  const formattedDate = formatDate(date);
  return (
    <>
      <div className="relative -bottom-[100px]">
        <div className="relative w-full h-full my-[10px]">
          {/* Contenedor principal con borde */}
          <div className="border border-darkBeige p-2 m-4 relative">
            <div className="text-left font-times">
              <h1 className="font-titles ">
                <span className="text-lightRed text-xl">old time sailors </span> <span className="text-beige text-xl">at</span>
                <br />
                <span className="text-beige text-xl">{event}</span>
              </h1>
              <p className="text-lightRed text-sm font-titles">{location}</p>
            </div>

            <div className="border-t-2 border-dashed border-darkBeige my-4" />

            <div className="absolute -right-[12px] top-20 w-[160px]">
              <div className="bg-beige p-3 py-4 rounded-2xl">
                <h3 className="text-lightRed text-[15px]  font-titles leading-tight">
                  more about
                  <br />
                  the venue
                </h3>
                <div className="mt-0.5 ">
                  <p className="text-darkBlue text-[7px] leading-tight font-txt">{venueInfo}</p>

                  <p className="text-darkBlue text-[8px] mt-1  underline font-titles">contact the venue for + info</p>
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
                    <Icon className="text-[10px] text-beige" />
                    <span className="text-[7.5px] text-beige">{text}</span>
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
              {/* Contenedor principal */}
              <div className="relative w-[295px] h-[130px] -left-[8px]">
                {/* Video primero en el DOM pero con z-index menor */}
                <div className="absolute inset-0  flex items-center justify-center z-20">
                  <video
                    controls
                    preload="none"
                    poster={"/assets/thumbnailvideoP.webp"}
                    className="w-[78%] h-[98%] absolute -top-[7px] left-[34px] object-cover rounded-sm] hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
                  >
                    <source src="/assets/powerVideo.mp4" type="video/mp4" />
                  </video>
                </div>

                {/* Recuadro después en el DOM y con z-index mayor */}
                <div className="absolute inset-0 z-10 -top-[58px] left-[5px]">
                  <Image
                    src="/assets/powerVideoBox.webp"
                    alt="Video frame"
                    width={290}
                    height={209}
                    className="w-[290px] h-[209px]"
                    priority={true}
                  />
                </div>
              </div>

              {/* Photo 2 */}
              <div className="absolute -right-[5px] -top-[25px] w-[175px] h-[130px] z-9">
                <Image src="/assets/powerPhoto2.webp" alt="Musicians" width={140} height={140} className="w-[180px] h-[180px]" loading="lazy" />
              </div>
            </div>

            {/* Lower photos */}
            <div className="relative h-[200px]">
              <div className="absolute left-[26px] bottom-[86px] w-1/2 z-20">
                <Image
                  src="/assets/powerPhoto1.webp"
                  alt="Performance"
                  width={185}
                  height={180}
                  className=" w-[185px] h-[185px] z-10"
                  loading="lazy"
                />
                <div className="relative">
                  <Image
                    src="/assets/beigeArrow.webp"
                    alt="More gigs"
                    width={180}
                    height={55}
                    className="w-[180px] h-[55px] absolute right-[45px] -bottom-[65px]"
                    loading="lazy"
                  />
                  <Link href={"/tickets/calendar-view"}>
                    <p className="absolute inset-0 font-titles text-darkBlue left-[55px] top-5 text-[24px]">more gigs</p>
                  </Link>
                </div>
              </div>

              <div className="absolute -right-[6px] bottom-[32px] w-[225px] h-[200px] z-10">
                <Image
                  src="/assets/powerPhoto3.webp"
                  alt="Crowd"
                  width={400}
                  height={400}
                  className="w-full h-auto shadow-[5px_0px_5px_rgba(0,0,0,0.3)]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Title */}
            <div className="absolute -bottom-[85px] left-[20px] z-30">
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-col leading-none">
                  <p className="text-lightRed text-[45px] font-titles">power</p>
                  <p className="text-lightRed text-[45px] font-titles">show</p>
                </div>
                <div className="text-[#e9ddc7] text-[9px] flex flex-col gap-4">
                  <div className="-ml-[30px] mt-[62px] font-titles leading-none tracking-wider">
                    <p>an upbeat, darker show. get ready to</p>
                    <p>party below deck like a pirate!</p>
                  </div>
                </div>
              </div>
            </div>

            <Image
              src="/assets/shipDrawing.webp"
              alt="Background drawing"
              width={155}
              height={135}
              className="w-[180px] h-[145px] absolute -bottom-[110px] -right-[15px] z-20"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};
