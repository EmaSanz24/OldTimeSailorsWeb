import Link from "next/link";
import { FaCalendar, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";

export const FamilyMobile = async () => {
  return (
    <div className="relative pt-9 -bottom-[10px] min-[425px]:-bottom-[20px]">
      <div className="relative w-full h-full my-[10px]">
        {/* Main container with border */}
        <div className="border border-darkBeige p-2  m-4 relative min-[375px]:p-4 min-[375px]:mx-4 min-[425px]:mx-6">
          <div className="text-left">
            <h1 className="font-titles">
              <span className="text-darkBlue text-xl  min-[375px]:text-2xl">old time sailors </span>
              <span className="text-lightRed text-xl min-[375px]:text-2xl ">at</span>
              <br />
              <span className="text-lightRed text-xl min-[375px]:text-2xl ">newquay orchard</span>
            </h1>
            <p className="text-darkBlue text-sm font-titles min-[375px]:text-lg">newquay</p>
          </div>
          <div className="border-t-2 border-dashed border-darkBeige my-4" />
          <div className="absolute -right-[12px] top-20 w-[160px] min-[375px]:w-44 min-[425px]:-right-4">
            <div className="bg-darkBlue p-3 py-4 rounded-2xl min-[375px]:py-0 min-[425px]:py-2">
              <h3 className="text-lightRed text-[15px] font-titles leading-tight min-[375px]:[20px] min-[425px]:[25px]">
                {" "}
                more about
                <br />
                the venue
              </h3>
              <div className="mt-0.5">
                <p className="text-beige font-txt leading tight text-[8px] min-[375px]:text-[11px] min-[425px]:text-[12px]">
                  A rural escape built by the community, for the community in the hearth of Newquay. A venue for the whole family with seating
                  options.
                </p>

                <p className="text-beige mt-1 font-titles underline text-[11px] min-[425px]:text-[12px]">contact the venue for + info</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-3">
              {[
                { icon: FaLocationDot, text: "Newquay Orchard, Newquay" },
                { icon: FaCalendar, text: "Saturday, May 12, 2025" },
                { icon: FaClock, text: "7:30 PM to 10:30 PM" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-darkBlue font-txt">
                  <Icon className="text-[10px] min-[375px]:text-[12px] min-[425px]:text[12px]" />
                  <span className="text-[7.5px] min-[375px]:text-[9px] min-[425px]:text-[12px]">{text}</span>
                </div>
              ))}
              <div className="relative">
                <Link
                  className="absolute inset-0 flex flex-row items-center justify-center bg-lightRed text-beige octagon-tickets max-w-[110px] min-[375px]:max-w-[130px] min-[425px]:w-[150px] min-[425px]:h-[40px]"
                  href={"/buytickets"}
                  target="_blank"
                >
                  <h3 className="font-titles justify-center text-[12px] min-[375px]:text-[14px] min-[425px]:text-[16px]"> buy tickets</h3>
                </Link>
              </div>
            </div>
            <p className="text-[12px] pt-14 pb-5 font-txt text-darkBlue min-[375px]:pt-8 min-[425px]:text-[14px]">
              You are invited to board the Sailorette and join the plentiful crew, 'The Old Time Sailors', for a night of footstomping, dancing and
              singing! You will be sailing back to the 19th century for an immersive experience of traditional seafaring music performed in a way you
              have never seen before. The Motley Crew and their plethora of traditional and eclectic instruments will take you back to the time of
              clashing tankards, and drunken debauchery. Sing and dance along like a drunken sailor as the band perform centuries old folk and shanty
              songs. Fancy dress is encouraged, so pull out your best seafaring garments me hearties and join the festivities.
            </p>
          </div>
        </div>
        {/* Media Section */}
        <div className="w-full h-400px relative -top-5 -left-2 min-[375px]:mb-10 min-[425px]:mb-[70px]">
          <div className="relative h-[150px] min-[375px]:h-[200px] ">
            {/* Video */}
            <div className="absolute left-1 -top2 w-[200px] h-[110px] min-[375px]:-left-0 min-[375px]:-top-2.5 min-[375px]:w-[265px] min-[375px]:h-[150px] min-[425px]:w-[298px] min-[425px]:h-[170px]">
              <Image src="/assets/videoBox.png" alt="Video Frame" width={800} height={440} />
              <div className="absolute inset-0 flex items-center justify-center">
                <video
                  controls
                  preload="none"
                  poster={"/assets/thumbnailvideo.webp"}
                  className="w-[80%] h-[90%] mt-3 -ml-5 object-cover border-darkBlue border-[6px] rounder-sm z-20 shadow-gray-500 shadow-[2px_-2px_5px_rgba(0,0,0,0.3)] min-[425px]:w-[82%] min-[425px]:-ml-6
                  hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
                >
                  <source src="/assets/familyVideo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            {/* Photo 2  */}
            <div className="absolute -right-1 -top-4 w-[130px] h-[130px] z-10 min-[375px]:-right-[2px] min-[375px]:w-[155px] min-[375px]:h-[155px] min-[425px]:w-[175px]">
              <Image
                src="/assets/familyPhoto2.png"
                alt="Musicians"
                width={1200}
                height={1200}
                className="shadow-gray500 shadow-[3px_3px_3px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
          {/* Lower Photos  */}
          <div className="relative h-[200px] bottom-8 min-[375px]:bottom-0 min-[425px]:-bottom-4">
            <div className="absolute left-7 -top16 z-20 w-[145px] h-[118px] min-[375px]:left-[27px] min-[375px]:-top-[55px] min-[375px]:w-[160px] min-[375px]:h-[120px] min-[425px]:w-[185px] min-[425px]:h-[120px]">
              <Image
                src="/assets/familyPhoto1.png"
                alt="
            Performance"
                width={580}
                height={472}
                className="z-10 shadow-gray-500 shadow-[0px_3px_3px_rgba(0,0,0,0.3)]"
              />
              <div className="relative">
                <Link href={"/tickets"}>
                  <Image
                    src="/assets/arrow2.png"
                    alt="More gigs"
                    width={580}
                    height={440}
                    className="absolute right-4 -bottom-12 h-[40px] min-[375px]:h-[50px] min-[375px]:right-[18px] min-[375px]:-bottom-[60px] min-[425px]:-bottom-[65px]"
                  />
                  <p className="absolute inset-0 font-titles text-beige left-6 top-4 text-[18px] min-[375px]:left-[22px] min-[375px]:top-[20px] min-[375px]:text-[20px] min-[425px]:text-[24px] min-[425px]:pt-0.5 min-[425px]:left-[35px] ">
                    {/* {" "} */}
                    more gigs
                  </p>
                </Link>
              </div>
            </div>
            <div className="absolute -right-1 top-1 w-[156px] h-[154px] z-10 min-[375px]:-right-[4px] min-[375px]:bottom-[59px] min-[375px]:w-[197px] min-[375px]:h-[190px] min-[375px]:-top-14 min-[425px]:-right-[6px] min-[425px]:bottom-[32px] min-[425px]:w-[225px] min-[425px]:h-[200px] mt-4">
              <Image
                src="/assets/familyPhoto3.png"
                alt="crowd"
                width={800}
                height={800}
                className="w-full h-full shadow-[5px_0px_5px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
          {/* Title */}
          <div className="absolute -bottom-8 left-4 z-10 min-[375px]:-bottom-[38px] min-[375px]:left-[20px] min-[425px]:-bottom-[100px] min-[425px]:left-[20px]">
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-col leading-none">
                <p className="text-darkBlue font-titles text-[35px] min-[375px]:text-[40px] min-[425px]:text-[45px]">family</p>
                <p className="text-darkBlue font-titles text-[35px] min-[375px]:text-[40px] min-[425px]:text-[45px]">show</p>
              </div>
              <div className="text-lightRed text-[8px] flex flex-col min-[375px]:text-[10px] min-[425px]:text-[12px]">
                <Image
                  src="/assets/anchor.png"
                  alt="Anchor"
                  width={88}
                  height={88}
                  className="-ml-[5px] rotate-12 w-[22px] h-[22px] min-[375px]:w-[30px] min-[375px]:h-[30px] min-[425px]:w-[35px] min-[425px]:h-[35px]"
                />
                <div className="-ml-[20px] mt-[10px] leading-none tracking-widest font-titles text-[12px] min-[425px]:-ml-[15px] min-[425px]:-mb-[8px]">
                  <p>a traditional sailor show,</p>
                  <p>sing along and dance with us!</p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/assets/drawing2.png"
            alt="Background Drawing"
            width={600}
            height={400}
            className="absolute -right-2 z-20 -bottom-12 w-[150px] h-[100px] min-[375px]:w-[160px] min-[375px]:h-[100px] min-[375px]:-bottom-[55px] min-[375px]:-right-[2px] min-[425px]:-bottom-[99px] min-[425px]:-right-[8px] min-[425px]:w-[180px] min-[425px]:h-[120px] contrast-[25%]"
          />
        </div>
      </div>
    </div>
  );
};
export default FamilyMobile;
