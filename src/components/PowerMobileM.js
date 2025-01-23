import Link from "next/link";
import { FaCalendar, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { memo } from "react";
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
const EventDescription = memo(() => (
  <p className="text-sm pb-5 pt-3 text-beige font-txt text-pretty" translate="no">
    Heave ho and up she rises! Cast aside your compass, throw your maps overboard and join the mutinous crew of The Old Time Sailor as they set sail
    for the wild uninhabited islands of Irish Punk, Shanty Punk, Polka Rock, Romani Punk, Dark Cabaret, and Twisted Circus! 'Rock and row' with our 21
    strong crew of rebellious musicians as the navigate a voyage through the thrashing seas of Hevay Metal and Hard Rock on a genre bending adventure
    into uncharted waters, join in the Wall of Death and thrash it out with your shipmates. Get ready for vigorous vocals, emphatic energy, mosh pits
    and head banging: we play it live and we play it loud, but as always with The Old Time Sailors... be prepared to expect the unexpected!
  </p>
));

export const PowerMobileM =  ({ data }) => {
  const { event, location, date, ticketsURL, venueInfo, gigStartTime, gigFinishTime } = data;
  const formattedDate = formatDate(date);
  const eventURL = "/eventURL";
  const router = useRouter();
  return (
    <>
      <div className="relative top-[15px]">
        <div className="relative -bottom-[50px] px-[15px] z-0 transform translate-z-0 will-change-transform">
          <div className="relative w-full h-full my-[10px]">
            {/* Contenedor principal con borde */}
            <div className="border-[3px] border-beige p-4 mx-4 relative">
              <div className="text-left lowercase">
                <h1 className="font-titles pt-1 text-2xl leading-none">
                  <div>
                  <span className="text-lightRed">old time sailors </span> 
                  <span className="text-beige"> at</span></div>
                  <p className="text-beige">{event}</p>
                </h1>
                <p className="text-lightRed text-sm font-txt">{location}</p>
              </div>

              <div className="border-t-3 border-dashed border-beige my-4" />

              <div className="absolute -right-[12px] top-[70px] w-[160px]">
                <div className="bg-beige p-3 py-4 rounded-2xl">
                  <h3 className="text-lightRed text-lg  font-bold font-titles leading-none">
                    <p>more about</p>
                    <p>the venue</p>
                  </h3>
                  <div className="mt-0.5 ">
                    <p className="text-darkBlue text-[7px] leading-tight font-txt">{venueInfo}</p>
                    <Link href={eventURL}>
                      <p className="text-darkBlue text-[8px] mt-1  underline font-titles">contact the venue for + info</p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Event info */}
              <div className="space-y-6 ">
                <div className="space-y-1.5">
                  {[
                    { icon: FaLocationDot, text: `${event}` },
                    { icon: FaCalendar, text: `${formattedDate}` },
                    {
                      icon: FaClock,
                      text: `${gigStartTime} to ${gigFinishTime}`,
                    },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-darkBlue font-txt leading-none">
                      <Icon className="text-[12px] text-lightRed" />
                      <span className="text-[11px] text-beige">{text}</span>
                    </div>
                  ))}

                  <div className="relative h-[18px]">
                    <Link
                      className="absolute inset-0 flex flex-row items-center justify-center bg-lightRed text-beige octagon-tickets"
                      style={{
                        "--octagon-width": "200px",
                        "--octagon-height": "33px",
                      }}
                      href={ticketsURL}
                      target="_blank"
                    >
                      <h3 className="font-txt justify-center text-[18px] uppercase">buy tickets</h3>
                    </Link>
                  </div>
                   <EventDescription/>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Media section */}
        <div className="w-full h-[auto] relative top-[30px] -left-2 mb-10">
          <div className="relative h-[200px]">
            {/* Video */}
            {/* Contenedor principal */}
            <div className="relative w-[245px] h-[130px] left-[5px]">
              {/* Video primero en el DOM pero con z-index menor */}
              <div className="absolute inset-0  flex items-center justify-center z-20">
                <video
                  controls
                  preload="none"
                  poster={"/assets/thumbnailvideoP.webp"}
                  className="w-[78%] h-[85%] absolute top-[6px] left-[29px] object-cover rounded-sm]
              hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
                >
                  <source src="/assets/powerVideo.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Recuadro después en el DOM y con z-index mayor */}
              <div className="absolute inset-0 z-10 -top-[45px] left-[5px]">
                <Image src="/assets/powerVideoBox2.svg" alt="Video frame" width={255} height={196} className="w-[255px] h-[196px]" priority={true} />
              </div>
            </div>

            {/* Photo 2 */}
            <div className="absolute -right-[3px] -top-[20px] w-[160px] h-[130px] z-9">
              <Image src="/assets/powerPhoto4.jpg" alt="Musicians" width={150} height={150} className="w-[150px] h-[150px]" loading="lazy" />
            </div>
          </div>

          {/* Lower photos */}
          <div className="relative h-[200px]">
            <div className="absolute left-[40px] -top-[80px] w-1/2 z-20">
              <Image src="/assets/powerPhoto1.webp" alt="Performance" width={170} height={170} className="w-[162px] h-[150px] z-10" loading="lazy" />
              <div className="relative" onClick={() => router.back()} role="button" tabIndex={0}>
                <Image
                  src="/assets/beigeArrow.webp"
                  alt="More gigs"
                  width={160}
                  height={50}
                  className="w-[160px] h-[50px] absolute right-[55px] -bottom-[60px]"
                  loading="lazy"
                />

                <p className="absolute inset-0 font-times font-titles text-darkBlue left-[15px] top-[18px] text-[25px]">more gigs</p>
              </div>
            </div>

            <div className="absolute -right-[4px] bottom-[70px] w-[197px] h-[190px] z-10">
              <Image src="/assets/powerPhoto3.webp" alt="Crowd" width={400} height={400} className="w-full h-auto" loading="lazy" />
            </div>
          </div>

          {/* Title */}
          <div className="absolute -bottom-[50px] left-[20px] z-30">
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-col leading-[50px]">
                <p className="text-lightRed text-[60px] font-titles ">power</p>
                <p className="text-lightRed text-[60px] font-titles">show</p>
              </div>
              <div className="text-beige text-[9.5px] flex flex-col">
                <div className="-ml-[45px] mt-[73px] font-txt font-bold leading-none tracking-widest uppercase truncate">
                  <p>an upbeat, darker show. get ready to</p>
                  <p>party below deck like a pirate!</p>
                </div>
              </div>
            </div>
          </div>

          <Image
            src="/assets/shipDrawing.webp"
            alt="Background drawing"
            width={170}
            height={140}
            className="w-[220px] h-[200px] absolute -bottom-[95px] -right-[20px] z-0 brightness-[235%] invert-[78%]"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};
