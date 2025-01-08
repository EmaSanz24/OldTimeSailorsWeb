import Link from "next/link";
import { FaCalendar, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";

export const FamilyLaptop = async () => {
  return (
    <div className="relative -bottom-[150px] min-[1440px]:bottom-[50px]">
      <div className="relative w-full h-full my-[50px] min-[1440px]:my-[250px]">
        {/* Main container with border */}
        <div className="border border-darkBeige p-2 relative w-[650px] -right-[95px] -top-[310px]">
          <div className="text-left px-10">
            <h1 className="font-titles leading-none">
              <span className="text-darkBlue text-[30px]">old time sailors </span>
              <span className="text-lightRed text-[30px] ">at</span>
              <br />
              <span className="text-lightRed text-[30px] ">newquay orchard</span>
            </h1>
            <p className="text-darkBlue text-[20px] font-titles ">newquay</p>
          </div>
          <div className="absolute w-72 top-[21px] -right-[75px] z-20">
            <div className="bg-darkBlue p-6 rounded-3xl">
              <h3 className="text-lightRed text-[25px] font-titles leading-none">
                {" "}
                more about
                <br />
                the venue
              </h3>
              <div className="mt-0.5 tracking-wide">
                <p className="text-beige font-txt leading-tight text-[12px]">
                  A rural escape built by the community, for the community in the hearth of Newquay. A venue for the whole family with seating
                  options.
                </p>

                <p className="text-beige mt-1 font-titles underline text-[12px]">contact the venue for + info</p>
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
                    <Icon className="text-[12px]" />
                    <span className="text-[12px]">{text}</span>
                  </div>
                ))}
              </div>

              <div className="relative">
                <Link
                  className="absolute inset-0 flex flex-col items-center justify-center bg-lightRed text-beige octagon-tickets max-w-[200px]"
                  href={"/buytickets"}
                  target="_blank"
                >
                  <h3 className="font-titles justify-center text-[27px] "> buy tickets</h3>
                </Link>
              </div>
            </div>
            <p className="text-[12px] font-txt text-darkBlue text-left leading-8">
              You are invited to board the Sailorette and join the plentiful crew, 'The Old Time Sailors', for a night of footstomping, dancing and
              singing! You will be sailing back to the 19th century for an immersive experience of traditional seafaring music performed in a way you
              have never seen before. The Motley Crew and their plethora of traditional and eclectic instruments will take you back to the time of
              clashing tankards, and drunken debauchery. Sing and dance along like a drunken sailor as the band perform centuries old folk and shanty
              songs. Fancy dress is encouraged, so pull out your best seafaring garments me hearties and join the festivities.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-[230px] -top-[100px]">
        <Image src="/assets/anchor.png" alt="Anchor" width={100} height={100} className="w-[40px] h-[50px]" />
      </div>
      <div className="absolute right-[15px] -top-[230px] z-10">
        <Image
          src="/assets/familyPhoto1.png"
          alt="
            Performance"
          width={200}
          height={200}
          className="w-[200px] h-[200px] shadow-gray-500 shadow-[0px_3px_3px_rgba(0,0,0,0.3)]"
        />
      </div>
      <div className="absolute right-[25px] -top-[35px] z-30">
        <Image
          src="/assets/familyPhoto2.png"
          alt="Musicians"
          width={200}
          height={200}
          className="w-[290px] shadow-gray500 shadow-[3px_3px_3px_rgba(0,0,0,0.3)]"
        />
      </div>
      <div className="absolute right-[275px] top-[230px] w-[380px] z-40">
        <Image src="/assets/familyPhoto3.png" alt="crowd" width={400} height={400} className="h-[350px] shadow-[5px_0px_5px_rgba(0,0,0,0.3)]" />
      </div>
      <div className="absolute -right-[0px] bottom-[0px]">
        <Image src="/assets/drawing2.png" alt="Background Drawing" width={300} height={300} className="w-[280px] h-[230px]" />
      </div>
      <div className="absolute top-[150px] left-[40px] w-[410px] h-[280px] z-50">
        <Image src="/assets/videoBox.png" alt="Video Frame" width={430} height={100} />
        <div className="absolute inset-0 flex items-center justify-center mb-7">
          <video
            controls
            className="object-cover w-[88%] border-[#1b344a] border-[10px] rounded-sm z-20 shadow-gray-500 shadow-[2px_-2px_5px_rgba(0,0,0,0.3)]"
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
            className="absolute left-[25px] -top-[100px] w-[310px] h-[110px]"
          />
          <p className="absolute inset-0 font-titles text-beige left-[90px] -top-[72px] text-[40px]">more gigs</p>
        </Link>
      </div>
      <div className="absolute -bottom-[190px]  left-[45px] z-10 ">
        <div className="flex flex-row items-center gap-3 mb-5">
          <div className="leading-none">
            <p className="text-darkBlue font-titles text-[80px]">family</p>
            <p className="text-darkBlue font-titles text-[80px] ">show</p>
          </div>
          <div className="text-lightRed text-[20px] -mb-[95px] -ml-[75px]">
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
