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

export const FamilyLaptopL =  ({ data }) => {
  const { event, location, date, ticketsURL, venueInfo, gigStartTime, gigFinishTime } = data;
  const formattedDate = formatDate(date);
  const eventURL = "/eventURL";
  const router = useRouter();
  return (
    <>
      <div className="relative top-[100px]">
        <div className="relative w-full h-full my-[250px]">
          {/* Contenedor principal con borde */}
          <div className="border-[3px] border-darkBeige p-2 relative w-[950px] -right-[95px] -top-[310px]">
            <div className="text-left px-10">
              <h1 className=" leading-none font-titles lowercase">
                <span className="text-darkBlue text-[55px]">old time sailors </span>
                <span className="text-lightRed text-[55px]">at</span>
                <br />
                <span className="text-lightRed text-[55px]">{event}</span>
              </h1>
              <p className="text-darkBlue font-txt lowercase text-[30px]">{location}</p>
            </div>
            <div className="absolute w-[350px] top-[20px] -right-[100px] z-20">
              <div className="bg-darkBlue p-6 rounded-3xl">
                <h3 className="text-lightRed text-[30px] font-titles leading-none">
                  <p>more about</p>
                  <p>the venue</p>
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
            <div className="space-y-6 p-4">
              <div className="flex flex-row gap-5">
                <div className="space-y-3">
                  {[
                    { icon: FaLocationDot, text: `${event}` },
                    { icon: FaCalendar, text: `${formattedDate}` },
                    { icon: FaClock, text: `${gigStartTime} to ${gigFinishTime}` },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-darkBlue font-txt">
                      <Icon className="text-[19px]" />
                      <span className="text-[19px]">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <Link
                    className="absolute inset-0 flex flex-col items-center justify-center bg-lightRed text-beige octagon-tickets top-[27px] left-8"
                    style={{
                      "--octagon-width": "270px",
                      "--octagon-height": "45px",
                    }}
                    href={ticketsURL}
                    target="_blank"
                  >
                    <h3 className="font-txt uppercase justify-center text-[32px] "> buy tickets</h3>
                  </Link>
                </div>
              </div>

              <p className="text-[19px] text-left text-darkBlue leading-8 font-txt">
                You are invited to board the Sailorette and join the plentiful crew, 'The Old Time Sailors', for a night of footstomping, dancing and
                singing! You will be sailing back to the 19th century for an immersive experience of traditional seafaring music performed in a way
                you have never seen before. The Motley Crew and their plethora of traditional and eclectic instruments will take you back to the time
                of clashing tankards, and drunken debauchery. Sing and dance along like a drunken sailor as the band perform centuries old folk and
                shanty songs. Fancy dress is encouraged, so pull out your best seafaring garments me hearties and join the festivities.
              </p>
            </div>
          </div>
          <div className="absolute right-[325px] -top-[35px]">
            <Image src="/assets/anchor.webp" alt="Anchor" width={100} height={100} className="w-[50px] h-[60px]" loading="lazy" />
          </div>
          <div className="absolute right-[15px] -top-[230px] z-10">
            <Image
              src="/assets/familyPhoto1.webp"
              alt="Performance"
              width={200}
              height={200}
              className="w-[290px] h-[290px] shadow-gray-500 shadow-[0px_3px_20px_rgba(0,0,0,0.3)]"
              loading="lazy"
            />
          </div>
          {/* Photo 2 */}
          <div className="absolute right-[25px] top-[53px] z-20">
            <Image
              src="/assets/familyPhoto2.webp"
              alt="Musicians"
              width={200}
              height={200}
              className="w-[390px] shadow-gray-500 shadow-[3px_3px_3px_rgba(0,0,0,0.3)]"
              loading="lazy"
            />
          </div>
          {/* Photo 3 */}
          <div className="absolute left-[520px] top-[268px] z-30">
            <Image src="/assets/familyPhoto3.webp" alt="Crowd" width={400} height={400} className="w-[550px] " loading="lazy" />
          </div>
          <div className="absolute -right-[0px] -bottom-[300px]">
            <Image
              src="/assets/drawing2.webp"
              alt="Background drawing"
              width={300}
              height={300}
              className="w-[380px] h-[330px] contrast-[25%]"
              loading="lazy"
            />
          </div>

          <div className="absolute top-[205px] left-[10px]">
            <Image src="/assets/videoBox.webp" alt="Video frame" width={590} height={280} priority={true} />
          </div>

          <div className="absolute inset-0 top-[239px] left-[47px] z-40">
            <video
              controls
              preload="none"
              poster={"/assets/thumbnailvideo.webp"}
              className="object-cover w-[540px] h-[300px] border-darkBlue border-[10px] rounded-sm shadow-gray-500 shadow-[2px_-2px_5px_rgba(0,0,0,0.3)]
              hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
            >
              <source src="/assets/familyVideo.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="relative" onClick={() => router.back()} role="button" tabIndex={0}>
            <Image
              src="/assets/arrow2.webp"
              alt="More gigs"
              width={300}
              height={300}
              className="absolute left-[10px] top-[10px] w-[430px] h-[120px] cursor-pointer"
              loading="lazy"
            />

            <p className="absolute inset-0  font-titles text-beige left-[150px] top-[35px] text-[50px]">more gigs</p>
          </div>
          {/* Title */}
          <div className="absolute -bottom-[420px]  left-[15px] z-10 ">
            <div className="flex flex-row items-center gap-3 mb-5">
              <div className="leading-[110px]">
                <p className="text-darkBlue text-[125px] font-titles">family</p>
                <p className="text-darkBlue text-[145px] font-titles">show</p>
              </div>
              <div className="text-lightRed text-[30px] -mb-[150px] -ml-[35px]">
                <div className="font-txt uppercase leading-tight tracking-widest">
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
export default FamilyLaptopL;
