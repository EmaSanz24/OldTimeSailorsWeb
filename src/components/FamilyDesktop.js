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
//
export const FamilyDesktop = ({ data }) => {
  const { event, location, date, ticketsURL, venueInfo, gigStartTime, gigFinishTime } = data;
  const formattedDate = formatDate(date);
  const eventURL = "/eventURL";
  const router = useRouter();
  return (
    <>
      <div className="relative -bottom-[175px]">
        <div className="relative w-full h-full my-[250px]">
          {/* Contenedor principal con borde */}
          <div className="border-[3px] border-darkBeige p-2 relative w-[1100px] -right-[100px] -top-[310px]">
            <div className="text-left px-10">
              <h1 className="leading-none font-titles lowercase pt-2">
                <span className="text-darkBlue text-[55px]">old time sailors </span>
                <span className="text-lightRed  text-[55px]"> at</span>
                <br />
                <span className="text-lightRed text-[55px]">{event}</span>
              </h1>
              <p className="text-darkBlue font-txt text-[30px] lowercase">{location}</p>
            </div>
            <div className="absolute w-[350px] top-[20px] -right-[100px] z-20">
              <div className="bg-darkBlue h-[220px] p-6 rounded-3xl">
                <h3 className="text-lightRed text-[30px] font-titles leading-none">
                  more about
                  <br />
                  the venue
                </h3>
                <div className="mt-0.5 tracking-wide">
                  <p className="text-beige text-[15px] font-txt leading-tight">{venueInfo}</p>
                  <Link href={eventURL}>
                    <p className="text-beige text-[15px] mt-1 font-titles underline">contact the venue for + info</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t-3 border-dashed border-darkBeige my-4" />

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
                    <div key={text} className="flex items-center gap-2 text-darkBlue font-txt leading-tight">
                      <Icon className="text-[25px] " />
                      <span className="text-[25px] font-txt">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="relative w-[250px] h-[100px]">
                  <Link
                    className="absolute left-4 top-[20px] inset-0 flex flex-row items-center justify-center bg-lightRed text-beige octagon-tickets"
                    style={{
                      width: "450px",
                      height: "85px",
                    }}
                    href={ticketsURL}
                    target="_blank"
                  >
                    <h3 className="font-txt justify-center text-[55px] uppercase">buy tickets</h3>
                  </Link>
                </div>
              </div>

              <p className="text-xl pr-[150px] pb-14 text-darkBlue font-txt leading-10">
                You are invited to board the Sailorette and join the plentiful crew, 'The Old Time Sailors', for a night of footstomping, dancing and
                singing! You will be sailing back to the 19th century for an immersive experience of traditional seafaring music performed in a way
                you have never seen before. The Motley Crew and their plethora of traditional and eclectic instruments will take you back to the time
                of clashing tankards, and drunken debauchery. Sing and dance along like a drunken sailor as the band perform centuries old folk and
                shanty songs. Fancy dress is encouraged, so pull out your best seafaring garments me hearties and join the festivities.
              </p>
            </div>
          </div>

          <div className="absolute right-[400px] -top-[10px] ">
            <Image
              src="/assets/anchor.webp"
              alt="Anchor"
              width={100}
              height={100}
              className="w-[60px] h-[70px] min-[1440px]:w-[60px] min-[1440px]:h-[70px]"
            />
          </div>

          <div className="absolute right-[15px] -top-[230px] z-10">
            <Image src="/assets/familyPhoto1.webp" alt="Performance" width={370} height={370} className="w-[370px] h-[370px] " loading="lazy" />
          </div>
          {/* Photo 2 */}
          <div className="absolute right-[25px] top-[130px] z-20">
            <Image src="/assets/familyPhoto2.webp" alt="Musicians" width={600} height={200} className="w-[600px] " loading="lazy" />
          </div>
          {/* Photo 3 */}
          <div className="absolute left-[515px] top-[460px] z-30">
            <Image src="/assets/familyPhoto3.webp" alt="Crowd" width={600} height={600} className="w-[600px] h-[600px]" loading="lazy" />
          </div>
          <div className="absolute right-[5px] -bottom-[500px]">
            <Image
              src="/assets/drawing2.webp"
              alt="Background drawing"
              width={600}
              height={500}
              className="w-[600px] h-[450px] brightness-[78%] contrast-[91%]"
              loading="lazy"
            />
          </div>
          <div className="absolute top-[340px] left-[35px]">
            <Image src="/assets/videoBox.webp" alt="Video frame" width={540} height={340} priority={true} className="w-[600px] h-[425px]" />
          </div>

          <div className="absolute inset-0 top-[375px] left-[70px] z-40">
            <video
              controls
              preload="none"
              poster={"/assets/thumbnailvideo.webp"}
              className="object-cover w-[540px] h-[340px] border-darkBlue border-[10px] rounded-sm shadow-gray-500 shadow-[2px_-2px_5px_rgba(0,0,0,0.3)]
                        hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
            >
              <source src="/assets/familyVideo.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative top-[15px]" onClick={() => router.back()} role="button" tabIndex={0}>
            <Image
              src="/assets/arrow2.webp"
              alt="More gigs"
              width={470}
              height={110}
              className="absolute left-[10px] top-[25px] w-[450px] h-[110px]"
              loading="lazy"
            />
            <p className="absolute inset-0 font-titles text-beige left-[150px] top-[35px] text-[65px]">more gigs</p>
          </div>
          {/* Title */}
          <div className="absolute -bottom-[470px]  left-[15px] z-10 ">
            <div className="flex flex-row items-center gap-3 mb-5">
              <div className=" leading-[140px]">
                <p className="text-darkBlue text-[180px] font-titles ">family</p>
                <p className="text-darkBlue text-[180px] font-titles">show</p>
              </div>
              <div className="text-lightRed text-[30px] -mb-[205px] -ml-[105px]">
                <div className="font-txt font-bold leading-tight tracking-widest uppercase">
                  <p>a traditional sailor show,</p>
                  <p>sing along and dance with us!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FamilyDesktop;
