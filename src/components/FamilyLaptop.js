import Link from "next/link";
import { FaCalendar, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";

export const FamilyLaptop = async () => {
  return (
    <div className="relative -bottom-[340px] min-[1440px]:-bottom-[100px]">
      <div className="relative w-full h-full my-[50px] min-[1440px]:my-[250px]">
        {/* Main container with border */}
        <div className="border border-darkBeige p-2 relative w-[650px] -right-[95px] -top-[310px] min-[1440px]:w-[950px]">
          <div className="text-left px-10">
            <h1 className="font-titles leading-none">
              <span className="text-darkBlue text-[30px] min-[1440px]:text-[55px]">old time sailors </span>
              <span className="text-lightRed text-[30px] min-[1440px]:text-[55px]">at</span>
              <br />
              <span className="text-lightRed text-[30px] min-[1440px]:text-[55px]">newquay orchard</span>
            </h1>
            <p className="text-darkBlue text-[20px] font-titles min-[1440px]:text-[30px]">newquay</p>
          </div>
          <div className="absolute w-72 top-[21px] -right-[75px] z-20 min-[1440px]:w-[350px] min-[1440px]:top-[20px] min-[1440px]:-right-[100px]">
            <div className="bg-darkBlue p-6 rounded-3xl min-[1440px]:h-[220px]">
              <h3 className="text-lightRed text-[25px] font-titles leading-none min-[1440px]:text-[30px]">
                {" "}
                more about
                <br />
                the venue
              </h3>
              <div className="mt-0.5 tracking-wide">
                <p className="text-beige font-txt leading-tight text-[12px] min-[1440px]:text-[15px]">
                  A rural escape built by the community, for the community in the hearth of Newquay. A venue for the whole family with seating
                  options.
                </p>

                <p className="text-beige mt-1 font-titles underline text-[12px] min-[1440px]:text-[15px]">contact the venue for + info</p>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-dashed border-darkBeige my-4" />
          {/* Event Info  */}
          <div className="space-y-6 p-4">
            <div className="flex flex-row gap-5">
              <div className="space-y-3">
                {[
                  { icon: FaLocationDot, text: "Newquay Orchard, Newquay" },
                  { icon: FaCalendar, text: "Saturday, May 12, 2025" },
                  { icon: FaClock, text: "7:30 PM to 10:30 PM" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-darkBlue font-txt">
                    <Icon className="text-[14px] min-[1440px]:text-[18px]" />
                    <span className="text-[14px] min-[1440px]:text-[18px]">{text}</span>
                  </div>
                ))}
              </div>

              <div className="relative">
                <Link
                  className="absolute inset-0 flex flex-col items-center justify-center bg-lightRed text-beige octagon-tickets max-w-[200px] top-[20px] min-[1440px]:max-w-[300px] min-[1440px]:h-[80px] min-[1440px]:top-[10px] min-[1440px]:left-[35px]"
                  href={"/buytickets"}
                  target="_blank"
                >
                  <h3 className="font-titles justify-center text-[27px] min-[1440px]:text-[35px]"> buy tickets</h3>
                </Link>
              </div>
            </div>
            <p className="text-[12.5px] font-txt text-darkBlue text-left leading-8 px-4 min-[1440px]:text-[17px]">
              You are invited to board the Sailorette and join the plentiful crew, 'The Old Time Sailors', for a night of footstomping, dancing and
              singing! You will be sailing back to the 19th century for an immersive experience of traditional seafaring music performed in a way you
              have never seen before. The Motley Crew and their plethora of traditional and eclectic instruments will take you back to the time of
              clashing tankards, and drunken debauchery. Sing and dance along like a drunken sailor as the band perform centuries old folk and shanty
              songs. Fancy dress is encouraged, so pull out your best seafaring garments me hearties and join the festivities.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-[230px] -top-[100px] min-[1440px]:right-[330px] min-[1440px]:-top-[35px]">
        <Image
          src="/assets/anchor.png"
          alt="Anchor"
          width={100}
          height={100}
          className="w-[40px] h-[50px] min-[1440px]:w-[60px] min-[1440px]:h-[70px]"
        />
      </div>
      <div className="absolute right-[15px] -top-[230px] z-10">
        <Image
          src="/assets/familyPhoto1.png"
          alt="
            Performance"
          width={200}
          height={200}
          className="w-[200px] h-[200px] shadow-gray-500 shadow-[0px_3px_3px_rgba(0,0,0,0.3)] min-[1440px]:w-[290px] min-[1440px]:h-[290px]"
        />
      </div>
      <div className="absolute right-[25px] -top-[35px] z-30 min-[1440px]:top-[53px] min-[1440px]:z-20">
        <Image
          src="/assets/familyPhoto2.png"
          alt="Musicians"
          width={200}
          height={200}
          className="w-[290px] shadow-gray500 shadow-[3px_3px_3px_rgba(0,0,0,0.3)] min-[1440px]:w-[390px]"
        />
      </div>
      <div className="absolute right-[275px] top-[230px] w-[380px] z-40 min-[1440px]:right-0 min-[1440px]:left-[520px] min-[1440px]:top-[268px] min-[1440px]:z-30 min-[1440px]:w-[550px]">
        <Image
          src="/assets/familyPhoto3.png"
          alt="crowd"
          width={550}
          height={550}
          className="h-[350px] shadow-[5px_0px_5px_rgba(0,0,0,0.3)] min-[1440px]:w-[550px] min-[1440px]:h-[550px]"
        />
      </div>
      <div className="absolute -right-[0px] -bottom-[30px] min-[1440px]:-bottom-[300px]">
        <Image
          src="/assets/drawing2.png"
          alt="Background Drawing"
          width={300}
          height={300}
          className="w-[280px] h-[230px] min-[1440px]:w-[380px] min-[1440px]:h-[330px] contrast-[25%]"
        />
      </div>
      <div className="absolute top-[150px] left-[40px] w-[410px] h-[280px] z-50 min-[1440px]:top-[200px] min-[1440px]:left-[10px] min-[1440px]:w-[590px] min-[1440px]:h-[280px]">
        <Image src="/assets/videoBox.png" alt="Video Frame" width={590} height={280} />
        <div className="absolute inset-0 flex items-center justify-center mb-7 min-[1440px]:top-[107px]">
          <video
            controls
            preload="none"
            poster={"/assets/thumbnailvideo.webp"}
            className="object-cover w-[88%] border-darkBlue border-[10px] rounded-sm z-20 shadow-gray-500 shadow-[2px_-2px_5px_rgba(0,0,0,0.3)] hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
          >
            <source src="/assets/familyVideo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="relative">
        <Link href={"/tickets"}>
          <Image
            src="/assets/arrow2.png"
            alt="More gigs"
            width={300}
            height={300}
            className="absolute left-[25px] -top-[100px] w-[310px] h-[110px] min-[1440px]:left-[10px] min-[1440px]:-top-[180px] min-[1440px]:w-[430px] min-[1440px]:h-[120px]"
          />
          <p className="absolute inset-0 font-titles text-beige left-[135px] -top-[72px] text-[40px] min-[1440px]:left-[135px] min-[1440px]:-top-[155px] min-[1440px]:text-[50px]">
            more gigs
          </p>
        </Link>
      </div>
      <div className="absolute -bottom-[250px]  left-[45px] z-10 min-[1440px]:-bottom-[470px] min-[1440px]:left-[55px]">
        <div className="flex flex-row items-center gap-3 mb-5">
          <div className="leading-none">
            <p className="text-darkBlue font-titles text-[80px] min-[1440px]:text-[125px]">family</p>
            <p className="text-darkBlue font-titles text-[80px] min-[1440px]:text-[125px]">show</p>
          </div>
          <div className="text-lightRed text-[20px] -mb-[95px] -ml-[45px] min-[1440px]:text-[30px] min-[1440px]:-mb-[150px] min-[1440px]:-ml-[50px]">
            <div className="leading-tight tracking-widest font-titles">
              <p>a traditional sailor show,</p>
              <p>sing along and dance with us!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FamilyLaptop;
