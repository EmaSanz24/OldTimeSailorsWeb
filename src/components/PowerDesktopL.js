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

export const PowerDesktopL = ({ data }) => {
  const { event, location, date, ticketsURL, venueInfo, gigStartTime, gigFinishTime } = data;
  const formattedDate = formatDate(date);
  const eventURL = "/eventURL";
  const router = useRouter();
  return (
    <>
      <div className="relative -bottom-[100px]">
        <div className="relative w-full h-full my-[250px]">
          {/* Contenedor principal con borde */}
          <div className="relative border-[3px] border-beige p-2 w-[1200px] h-[850px] -right-[130px] -top-[310px]">
            <div className="text-left px-10">
              <h1 className="leading-none lowercase font-titles">
                <span className="text-lightRed text-[55px]">old time sailors </span>
                <span className="text-beige  text-[55px]"> at</span>
                <br />
                <span className="text-beige text-[55px]">{event}</span>
              </h1>
              <p className="text-lightRed font-txt text-[30px] mt-4 lowercase">{location}</p>
            </div>
            <div className="absolute w-[450px]  top-[20px] -right-[100px] z-20">
              <div className="bg-beige h-[300px] p-6 rounded-3xl">
                <h3 className="text-lightRed text-[60px] font-titles leading-none">
                  more about
                  <br />
                  the venue
                </h3>
                <div className="mt-0.5 tracking-wide">
                  <p className="text-darkBlue text-[15px] font-txt leading-tight">{venueInfo}</p>
                  <Link href={eventURL}>
                    <p className="text-darkBlue text-[20px] mt-1 font-titles underline">contact the venue for + info</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-dashed border-beige my-4" />

            {/* Event info */}
            <div className="space-y-6 pl-[45px]">
              <div className="flex flex-row gap-5">
                <div className="space-y-3">
                  {[
                    { icon: FaLocationDot, text: `${event}` },
                    { icon: FaCalendar, text: `${formattedDate}` },
                    {
                      icon: FaClock,
                      text: `${gigStartTime} to ${gigFinishTime}`,
                    },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-beige font-txt">
                      <Icon className="text-[25px] text-lightRed" />
                      <span className="text-[25px] font-txt">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="relative w-[250px] h-[100px]">
                  <Link
                    className="absolute left-4 inset-0 flex flex-row items-center justify-center bg-lightRed text-beige octagon-tickets"
                    style={{
                      width: "450px",
                      height: "130px",
                    }}
                    href={ticketsURL}
                    target="_blank"
                  >
                    <h3 className="font-txt justify-center text-[55px] uppercase">buy tickets</h3>
                  </Link>
                </div>
              </div>

              <p className="text-[35px] pr-[175px] text-beige font-txt leading-10">
                Heave ho and up she rises! Cast aside your compass, throw your maps overboard and join the mutinous crew of The Old Time Sailor as
                they set sail for the wild uninhabited islands of Irish Punk, Shanty Punk, Polka Rock, Romani Punk, Dark Cabaret, and Twisted Circus!
                'Rock and row' with our 21 strong crew of rebellious musicians as the navigate a voyage through the thrashing seas of Hevay Metal and
                Hard Rock on a genre bending adventure into uncharted waters, join in the Wall of Death and thrash it out with your shipmates. Get
                ready for vigorous vocals, emphatic energy, mosh pits and head banging: we play it live and we play it loud, but as always with The
                Old Time Sailors... be prepared to expect the unexpected!
              </p>
            </div>
          </div>
          <div className="absolute right-[21px] -top-[230px] z-10">
            <Image src="/assets/powerPhoto1.webp" alt="Performance" width={470} height={470} className="w-[470px] h-[470px] " loading="lazy" />
          </div>
          {/* Photo 2 */}
          <div className="absolute right-[95px] top-[225px] z-20">
            <Image src="/assets/powerPhoto4.jpg" alt="Musicians" width={650} height={200} className="w-[650px] " loading="lazy" />
          </div>
          {/* Photo 3 */}
          <div className="absolute left-[500px] top-[550px] z-30">
            <Image src="/assets/powerPhoto3.webp" alt="Crowd" width={750} height={600} className="w-[750px]" loading="lazy" />
          </div>
          <div className="absolute -right-[40px] top-[810px]">
            <Image
              src="/assets/shipDrawing.webp"
              alt="Background drawing"
              width={800}
              height={800}
              className="w-[800px] h-[800px] mix-blend-multiply brightness-[55%] opacity-[75%]"
              loading="lazy"
            />
          </div>
          <div className="relative bottom-[550px] w-full">
            <div className="absolute top-[95px] left-[10px] z-30 ">
              <Image src="/assets/powerVideoBox2.svg" alt="Video frame" width={650} height={550} className="w-[650px] h-[550px]" priority={true} />
            </div>

            <div className="absolute inset-0 top-[250px] left-[85px] z-50">
              <video
                controls
                preload="none"
                poster={"/assets/thumbnailVideoP.webp"}
                className="object-cover w-[500px] h-[280px] rounded-sm hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
              >
                <source src="/assets/powerVideo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="relative top-[100px]" onClick={() => router.back()} role="button" tabIndex={0}>
            <Image
              src="/assets/beigeArrow.webp"
              alt="More gigs"
              width={470}
              height={150}
              className="absolute left-[10px] top-[25px] w-[470px] h-[150px]"
              loading="lazy"
            />

            <p className="absolute inset-0 font-titles text-darkBlue left-[130px] top-[45px] text-[75px]">more gigs</p>
          </div>
          {/* Title */}
          <div className="absolute -bottom-[800px]  left-[15px] z-10 ">
            <div className="flex flex-row items-center gap-3 mb-5">
              <div className="leading-tight">
                <p className="text-lightRed text-[190px] font-titles">power</p>
                <p className="text-lightRed text-[190px] font-titles">show</p>
              </div>
              <div className="text-beige text-[40px] -mb-[280px] -ml-[105px]">
                <div className="font-txt leading-tight tracking-widest">
                  <p>AN UPBEAT, DARKER SHOW. GET READY TO</p>
                  <p>PARTY BELOW DECK LIKE A PIRATE!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PowerDesktopL;
