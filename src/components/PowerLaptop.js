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

export const PowerLaptop = async ({ data }) => {
  const { event, location, date, ticketsURL, venueInfo, gigStartTime, gigFinishTime } = data;
  const formattedDate = formatDate(date);

  const router = useRouter();

  return (
    <>
      <div className="relative top-[340px] right-[5px]">
        <div className="relative w-full h-full my-[50px]">
          {/* Contenedor principal con borde */}
          <div className="border-[3px] border-beige p-2 relative w-[650px] -right-[95px] -top-[310px]">
            <div className="text-left px-10">
              <h1 className="leading-none">
                <span className="text-lightRed font-titles text-[30px]">old time sailors </span>
                <span className="text-beige font-titles text-[30px]">at</span>
                <br />
                <br />
                <span className="text-beige font-titles text-[30px]">{event}</span>
              </h1>
              <p className="text-lightRed font-titles text-[20px] mt-2">{location}</p>
            </div>
            <div className="absolute w-[250px] top-[21px] -right-[75px] z-20">
              <div className="bg-[#e9ddc7] p-4 rounded-3xl ">
                <h3 className="text-lightRed text-[25px] font-titles leading-none">
                  <p>more about</p>
                  <p>the venue</p>
                </h3>
                <div className="mt-0.5 tracking-wide">
                  <p className="text-darkBlue text-[12px] font-txt leading-tight">{venueInfo}</p>

                  <p className="text-darkBlue text-[12px] mt-1 font-titles underline">contact the venue for + info</p>
                </div>
              </div>
            </div>
            <div className="border-t-3 border-dashed border-beige my-4" />

            {/* Event info */}
            <div className="space-y-2 p-4 ">
              <div className="flex flex-row gap-5">
                <div className="space-y-3">
                  {[
                    { icon: FaLocationDot, text: `${event}` },
                    { icon: FaCalendar, text: `${formattedDate}` },
                    { icon: FaClock, text: `${gigStartTime} to ${gigFinishTime}` },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-beige font-semibold">
                      <Icon className="text-[12px] text-lightRed" />
                      <span className="text-[12px]">{text}</span>
                    </div>
                  ))}
                </div>
                <div className="relative w-[250px] h-[100px] ">
                  <Link
                    className="absolute left-5 inset-0 flex flex-row items-center justify-center bg-lightRed text-beige octagon-tickets"
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                    href={ticketsURL}
                    target="_blank"
                  >
                    <h3 className="font-titles justify-center text-[20px]"> buy tickets</h3>
                  </Link>
                </div>
              </div>

              <p className="text-sm text-left text-beige font-txt leading-[31px] px-4">
                Heave ho and up she rises! Cast aside your compass, throw your maps overboard and join the mutinous crew of The Old Time Sailor as
                they set sail for the wild uninhabited islands of Irish Punk, Shanty Punk, Polka Rock, Romani Punk, Dark Cabaret, and Twisted Circus!
                'Rock and row' with our 21 strong crew of rebellious musicians as the navigate a voyage through the thrashing seas of Hevay Metal and
                Hard Rock on a genre bending adventure into uncharted waters, join in the Wall of Death and thrash it out with your shipmates. Get
                ready for vigorous vocals, emphatic energy, mosh pits and head banging: we play it live and we play it loud, but as always with The
                Old Time Sailors... be prepared to expect the unexpected!
              </p>
            </div>
          </div>

          <div className="absolute right-[15px] -top-[230px] z-10">
            <Image src="/assets/powerPhoto1.webp" alt="Performance" width={200} height={200} className="w-[200px] h-[200px]" loading="lazy" />
          </div>
          {/* Photo 2 */}
          <div className="absolute right-[25px] -top-[35px] z-30">
            <Image src="/assets/powerPhoto2.webp" alt="Musicians" width={200} height={200} className="w-[290px]" loading="lazy" />
          </div>
          {/* Photo 3 */}
          <div className="absolute right-[275px] top-[230px] w-[380px] z-40">
            <Image src="/assets/powerPhoto3.webp" alt="Crowd" width={400} height={400} className="h-[360px] " loading="lazy" />
          </div>
          <div className="absolute -right-[28px] bottom-[0px]">
            <Image src="/assets/shipDrawing.webp" alt="Background drawing" width={300} height={300} className="w-[330px] h-[300px]" loading="lazy" />
          </div>
          <div className="absolute top-[165px] left-[40px] w-[410px] h-[280px] z-50">
            <Image src="/assets/powerVideoBox.webp" alt="Video frame" width={430} height={100} priority={true} />
            <div className="absolute inset-0 top-[43px] -left-[10px] -right-[10px] flex items-center justify-center">
              <video
                controls
                preload="none"
                poster={"/assets/thumbnailvideoP.webp"}
                className="object-cover w-[75%] h-[75%] rounded-sm z-20  hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
              >
                <source src="/assets/powerVideo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/beigeArrow.webp"
              alt="More gigs"
              width={300}
              height={300}
              className="absolute left-[25px] -top-[100px] w-[310px] h-[110px]"
              loading="lazy"
            />
            <Link href={"/tickets/calendar-view"}>
              <p className="absolute inset-0 font-titles font-bold text-darkBlue left-[130px] -top-[72px] text-[40px]">more gigs</p>
            </Link>
          </div>
          {/* Title */}
          <div className="absolute -bottom-[190px]  left-[45px] z-10 ">
            <div className="flex flex-row items-center gap-3 mb-5">
              <div className="leading-none">
                <p className="text-lightRed text-[80px] font-titles">power</p>
                <p className="text-lightRed text-[80px] font-titles">show</p>
              </div>
              <div className="text-beige text-[20px] -mb-[95px] -ml-[35px]">
                <div className="font-titles leading-tight tracking-widest">
                  <p>an upbeat, darker show. get ready to</p>
                  <p>party below deck like a pirate!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PowerLaptop;
