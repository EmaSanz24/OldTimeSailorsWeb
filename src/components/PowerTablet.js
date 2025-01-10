import Link from "next/link";
import { FaCalendar, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";

export const PowerTablet = async () => {
  return (
    <>
      <div className="relative -bottom-[150px]">
        {/* Contenedor principal con borde */}
        <div className="border border-[#e9ddc7] p-4 mx-6 relative">
          <div className="text-left font-times">
            <h1 className="font-bold">
              <span className="text-[#d22a4e] font-titles text-[40px]">
                old time sailors{" "}
              </span>
              <span className="text-[#e9ddc7] font-titles text-[40px]">
                {" "}
                at
              </span>
              <br />
              <span className="text-[#e9ddc7] font-titles text-[40px]">
                {" "}
                newquay orchard
              </span>
            </h1>
            <p className="text-[#d22a4e] font-titles text-[20px]">newquay</p>

            <div className="absolute w-64 top-20 -right-4">
              <div className="bg-[#e9ddc7] p-6 rounded-3xl">
                <h3 className="text-[#d22a4e] text-[25px] font-titles leading-tight">
                  more about
                  <br />
                  the venue
                </h3>
                <div className="mt-0.5">
                  <p className="text-[#1b344a] text-[12px] font-txt leading-tight">
                    A rural escape built by the community, for the community in
                    the heart of Newquay.
                  </p>
                  <p className="text-[#1b344a] text-[12px] font-txt leading-tight">
                    A venue for the whole family with seating options.
                  </p>
                  <Link href="/venue-info">
                    <p className="text-[#1b344a] text-[12px] mt-1 font-titles underline">
                      contact the venue for + info
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-dashed border-[#e9ddc7] my-4" />

          {/* Event info */}
          <div className="space-y-6">
            <div className="flex flex-row gap-5">
              <div className="space-y-3">
                {[
                  { icon: FaLocationDot, text: "Newquay Orchard, Newquay" },
                  { icon: FaCalendar, text: "Saturday, May 12, 2025" },
                  { icon: FaClock, text: "7:30PM to 10:30PM" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 text-[#e9ddc7] font-semibold"
                  >
                    <Icon className="text-[12px] text-[#d22a4e]" />
                    <span className="text-[12px]">{text}</span>
                  </div>
                ))}
              </div>

              <div className="relative w-[250px] h-[100px] ">
                <Link
                  className="absolute left-5 inset-0 flex flex-row items-center justify-center bg-lightRed text-beige octagon-tickets"
                  style={{
                    "width": "200px",
                    "height": "50px",
                  }}
                  href={"/buytickets"}
                  target="_blank"
                >
                  <h3 className="font-titles justify-center text-[20px]">
                    {" "}
                    buy tickets
                  </h3>
                </Link>
              </div>
            </div>

            <p className="text-[14px] text-left text-[#e9ddc7] leading-8">
              Heave ho and up she rises! Cast aside your compass, throw your
              maps overboard and join the mutinous crew of The Old Time Sailor
              as they set sail for the wild uninhabited islands of Irish Punk,
              Shanty Punk, Polka Rock, Romani Punk, Dark Cabaret, and Twisted
              Circus! 'Rock and row' with our 21 strong crew of rebellious
              musicians as the navigate a voyage through the thrashing seas of
              Hevay Metal and Hard Rock on a genre bending adventure into
              uncharted waters, join in the Wall of Death and thrash it out with
              your shipmates. Get ready for vigorous vocals, emphatic energy,
              mosh pits and head banging: we play it live and we play it loud,
              but as always with The Old Time Sailors... be prepared to expect
              the unexpected!
            </p>
          </div>
        </div>

        {/* Media section */}
        <div className="w-full h-[auto] relative -bottom-[35px] mb-[50px]">
          <div className="relative h-[220px]">
            {/* Video */}
            {/* Contenedor principal */}
            <div className="relative w-[550px] h-[230px] -left-[8px] z-30">
              {/* Video primero en el DOM pero con z-index menor */}
              <div className="absolute inset-0  flex items-center justify-center z-40">
                <video
                  controls
                  preload="none"
                  poster={"/assets/thumbnailvideoP.webp"}
                  className="w-[70%] h-[98%] absolute -top-[19px] left-[41px] object-cover rounded-sm]  hover:opacity-100 [&::-webkit-media-controls]:opacity-0 hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
                >
                  <source src="/assets/powerVideo.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Recuadro después en el DOM y con z-index mayor */}
              <div className="absolute inset-0 z-10 -top-[110px] -left-[15px]">
                <Image
                  src="/assets/powerVideoBox.webp"
                  alt="Video frame"
                  width={500}
                  height={200}
                  className="w-[500px] h-[371px]"
                  priority={true}
                />
              </div>
            </div>

            {/* Photo 2 */}
            <div className="absolute right-[8px] -top-12 w-[350px] z-10">
              <Image
                src="/assets/powerPhoto2.webp"
                alt="Musicians"
                width={140}
                height={140}
                className="w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Lower photos */}
          <div className="relative h-[750px] mx-5 mb-4">
            <div className="absolute -top-[14px] left-[0px] w-1/2 z-20">
              <Image
                src="/assets/powerPhoto1.webp"
                alt="Performance"
                width={300}
                height={280}
                className="z-10 h-[320px] ml-2 mt-4"
                loading="lazy"
              />
              <div className="relative">
                <Image
                  src="/assets/beigeArrow.webp"
                  alt="More gigs"
                  width={300}
                  height={300}
                  className="absolute -left-[18px] top-[80px] w-[290px] h-[110px]"
                  loading="lazy"
                />
                <p className="absolute inset-0 font-titles text-[#1b344a] left-[70px] top-[105px] text-[45px]">
                  more gigs
                </p>
              </div>
            </div>

            <div className="absolute -right-[15px] top-[100px] w-[450px] h-[200px] z-10">
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
          <div className="absolute -bottom-[10px]  left-[15px] z-30 ">
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-col leading-none mb-10">
                <p className="text-[#d22a4e] text-[80px] font-titles">power</p>
                <p className="text-[#d22a4e] text-[80px] font-titles">show</p>
              </div>
              <div className="text-[#e9ddc7] text-[17px] flex flex-col">
                <div className="-ml-[65px] mt-[70px] font-titles leading-none tracking-widest">
                  <p>an upbeat, darker show. get ready to</p>
                  <p>party below deck like a pirate!</p>
                </div>
              </div>
            </div>
          </div>

          <Image
            src="/assets/shipDrawing.webp"
            alt="Background drawing"
            width={300}
            height={300}
            className="absolute -bottom-[20px] -right-[15px] z-20"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};
export default PowerTablet;
