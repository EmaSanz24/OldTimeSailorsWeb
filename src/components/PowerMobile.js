import Link from "next/link";
import { FaCalendar, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";

export const PowerMobile = async () => {
  return (
    <div className="relative pt-10 -bottom-[10px] min-[425px]:-bottom-[20px]">
      <div className="relative w-full h-full my-[10px]">
        {/* Main container with border */}
        <div className="border border-darkBeige p-2  m-4 relative min-[375px]:p-4 min-[375px]:mx-4 min-[425px]:mx-6">
          <div className="text-left">
            <h1 className="font-titles">
              <span className="text-lightRed text-xl">old time sailors </span>
              <span className="text-beige text-xl">at</span>
              <br />
              <span className="text-beige text-xl">newquay orchard</span>
            </h1>
            <p className="text-lightRed text-sm font-titles">newquay</p>
          </div>
          <div className="border-t-2 border-dashed border-darkBeige my-4" />
          <div className="absolute -right-[12px] top-20 w-[160px] min-[375px]:w-44">
            <div className="bg-beige p-3 py-4 rounded-2xl min-[375px]:py-2">
              <h3 className="text-lightRed text-[15px] font-titles leading-tight min-[375px]:text-[16px]">
                {" "}
                more about
                <br />
                the venue
              </h3>
              <div className="mt-0.5">
                <p className="text-darkBlue font-txt leading tight text-[8px] min-[375px]:text-[9px] min-[425px]:text-[10px]">
                  A rural escape built by the community, for the community in the hearth of Newquay. A venue for the whole family with seating
                  options.
                </p>

                <p className="text-darkBlue mt-1 font-titles underline text-[10px] min-[375px]:text-[11px] min-[425px]:text-[12px]">
                  contact the venue for + info
                </p>
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
                <div key={text} className="flex items-center gap-2 text-beige font-txt">
                  <Icon className="text-[11px] min-[375px]:text-[12px] min-[425px]:text[13px]" />
                  <span className="text-[8px] min-[375px]:text-[9px] min-[425px]:text-[12px]">{text}</span>
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
            <p className="text-[12px] pt-14 pb-5 font-txt text-beige min-[375px]:pt-8 min-[375px]:text-[13px] min-[425px]:text-[14px]" translate="no">
              Heave ho and up she rises! Cast aside your compass, throw your maps overboard and join the mutinous crew of The Old Time Sailor as they
              set sail for the wild uninhabited islands of Irish Punk, Shanty Punk, Polka Rock, Romani Punk, Dark Cabaret, and Twisted Circus! 'Rock
              and row' with our 21 strong crew of rebellious musicians as the navigate a voyage through the thrashing seas of Hevay Metal and Hard
              Rock on a genre bending adventure into uncharted waters, join in the Wall of Death and thrash it out with your shipmates. Get ready for
              vigorous vocals, emphatic energy, mosh pits and head banging: we play it live and we play it loud, but as always with The Old Time
              Sailors... be prepared to expect the unexpected!
            </p>
          </div>
        </div>
        {/* Media Section */}
        <div className="w-full h-[auto] relative -top-5 -left-2 min-[375px]:mb-10 min-[425px]:mb-[70px]">
          <div className="relative h-[200px]">
            {/* Video */}
            <div className="absolute w-[245px] h-[130px] min-[375px]:-left-[5px] min-[425px]:w-[298px] min-[425px]:h-[130px] min-[425px]:-left-[8px]">
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <video
                  controls
                  preload="none"
                  poster={"/assets/thumbnailVideoP.webp"}
                  className="w-[70%] h-[80%] absolute -top-[7px] left-[26px] object-cover rounded-sm min-[375px]:w-[78%] min-[375px]:h-[95%] min-[375px]:top-0 min-[375px]:left-[29px] min-[425px]:h-[98%] min-[425px]:left-[34px]
                     hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
                >
                  <source src="/assets/powerVideo.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0 z-10 -top-[45px] left-[5px] min-[425px]:-top-[51px] min-[425px]:left-[5px]">
                <Image
                  src="/assets/powerVideoBox.webp"
                  alt="Video Frame"
                  width={800}
                  height={440}
                  className="w-[215px] h-[166px] min-[375px]:w-[255px] min-[375px]:h-[196px] min-[425px]:w-[290px] min-[425px]:h-[209px]"
                  priority={true}
                />
              </div>
            </div>
            {/* Photo 2  */}
            <div className="absolute -right-1 -top-4 w-[130px] h-[130px] z-9 min-[375px]:-right-[3px] min-[375px]:w-[160px] min-[375px]:h-[130px] min-[425px]:w-[175px] min-[425px]:-right-[5px] min-[425px]:-top-[25px]">
              <Image
                src="/assets/powerPhoto2.webp"
                alt="Musicians"
                width={1200}
                height={1200}
                className="w-[140px] h-[130px] min-[375px]:w-[180px] min-[375px]:h-[160px] min-[425px]:w-[180px] min-[425px]:h-[180px]"
                loading="lazy"
              />
            </div>
          </div>
          {/* Lower Photos  */}
          <div className="relative h-[200px] bottom-8 min-[375px]:bottom-0 min-[425px]:-bottom-2">
            <div className="absolute left-7 -top-16 z-20 w-1/2 min-[375px]:left-[27px] min-[375px]:-top-[70px] min-[425px]:left-[26px] min-[425px]:bottom-[86px]">
              <Image
                src="/assets/powerPhoto1.webp"
                alt="
                Performance"
                width={580}
                height={472}
                className="z-10 w-[145px] h-[145px] min-[375px]:w-[160px] min-[375px]:h-[160px] min-[425px]:w-[185px] min-[425px]:h-[185px]"
                loading="lazy"
              />
              <div className="relative">
                <Link href={"/tickets"}>
                  <Image
                    src="/assets/beigeArrow.webp"
                    alt="More gigs"
                    width={580}
                    height={440}
                    className="absolute right-8 -bottom-12 h-[40px] w-[145px] min-[375px]:w-[160px] min-[375px]:h-[50px] min-[375px]:right-[40px] min-[375px]:-bottom-[60px] min-[425px]:-bottom-[65px] min-[425px]:right-[45px]"
                    loading="lazy"
                  />
                  <p className="absolute inset-0 font-titles text-darkBlue left-6 top-4 text-[15px] min-[375px]:left-[32px] min-[375px]:top-[20px] min-[375px]:text-[20px] min-[425px]:text-[24px] min-[425px]:pt-0.5 min-[425px]:left-[45px] ">
                    {/* {" "} */}
                    more gigs
                  </p>
                </Link>
              </div>
            </div>
            <div className="absolute -right-1 -top-10 w-[156px] h-[154px] z-10 min-[375px]:-right-[4px] min-[375px]:-top-12 min-[375px]:w-[197px] min-[375px]:h-[190px] min-[425px]:-right-[6px] min-[425px]:w-[225px] min-[425px]:h-[200px] min-[425px]:-top-14 mt-4">
              <Image
                src="/assets/powerPhoto3.webp"
                alt="crowd"
                width={800}
                height={800}
                className="w-full h-auto shadow-[5px_0px_5px_rgba(0,0,0,0.3)]"
                loading="lazy"
              />
            </div>
          </div>
          {/* Title */}
          <div className="absolute bottom-4 left-4 z-30 min-[375px]:-bottom-[48px] min-[375px]:left-[20px] min-[425px]:-bottom-[105px] min-[425px]:left-[20px]">
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-col leading-none">
                <p className="text-lightRed font-titles text-[35px] min-[375px]:text-[40px] min-[425px]:text-[45px]">Power</p>
                <p className="text-lightRed font-titles text-[35px] min-[375px]:text-[40px] min-[425px]:text-[45px]">show</p>
              </div>
              <div className="text-beige text-[10px] flex flex-col min-[375px]:text-[12px] min-[425px]:text-[14px]">
                <div className="-ml-[35px] mt-[45px] leading-none tracking-wider font-titles min-[375px]:mt-[53px] min-[425px]:-ml-[15px]">
                  <p>an upbeat, darker show. get ready to</p>
                  <p>party below deck like a pirate!</p>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/assets/shipDrawing.webp"
            alt="Background Drawing"
            width={600}
            height={400}
            className="absolute -right-[6px] z-20 -bottom-[35px] w-[165px] h-[145px] min-[375px]:w-[175px] min-[375px]:h-[155px] min-[375px]:-bottom-[100px] min-[375px]:-right-[6px] min-[425px]:-bottom-[150px] min-[425px]:-right-[6px] min-[425px]:w-[185px] min-[425px]:h-[165px] brightness-[15%]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
export default PowerMobile;
