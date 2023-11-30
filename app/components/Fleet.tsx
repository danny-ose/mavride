import Image from "next/image";
import React from "react";

const Fleet = () => {
  return (
    <>
      <section className="absolute w-[100%] left-[50%] translate-x-[-50%] translate-y-[40%] top-[700px] h-[2800px] overflow-hidden flex flex-col items-center justify-center gap-20 text-left text-45xl text-midnightblue-200 font-space-grotesk">
        <div className="w-full overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[140px]">
          <h1 className="m-0 relative text-inherit capitalize font-bold font-inherit text-midnightblue-200">
            Our Fleet
          </h1>
        </div>
        <p className="text-xl text-dimgray text-center inline-block w-full h-[72px] translate-y-[-70%] ml-px">
          With our meticulously curated fleet tailored to your specific needs,
          we
          <br />
          ensure your journey is comfortable and in style.
        </p>
      </section>

      <section className="absolute w-[100%] left-[50%] translate-x-[-50%] translate-y-[45%] top-[700px] h-[2800px] overflow-hidden flex flex-col items-center justify-center gap-20 text-left text-13xl text-midnightblue-200 font-space-grotesk mt-2">
        <div className="w-[100%] flex flex-row items-start justify-start gap-16 h-[525px] ml-px translate-x-[17%] translate-y-[40%]">
          <div className="flex-1 flex flex-col items-start justify-start gap-4 translate-x-[-43%]">
            <Image
              src={"/diagnosis.png"}
              alt="diagnosis"
              width={500}
              height={500}
              className="self-stretch relative rounded-2xl max-w-full overflow-hidden h-[360px] shrink-0 object-cover"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit">
                Ambulatory/Sedan
              </h1>
              <p className="self-stretch relative text-base text-dimgray">
                Non-emergency medical transport service for clients <br /> who
                have no other option of transportation.
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-start justify-start gap-4 translate-x-[-50%]">
            <Image
              src={"/wheelchair.png"}
              alt="wheelchair"
              width={500}
              height={500}
              className="self-stretch relative rounded-2xl max-w-full overflow-hidden h-[360px] shrink-0 object-cover"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit">
                Wheel Chair
              </h1>
              <p className="self-stretch relative text-base text-dimgray w-[75%]">
                Equipped for comfort and ensuring smooth transport for our
                handicapped/disabled clients,
                <br /> with professional, qualified, and emotionally intelligent
                drivers to assist our clients.
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-start justify-start gap-4 translate-x-[-50%]">
            <Image
              src={"/gurney.png"}
              alt="wheelchair"
              width={500}
              height={500}
              className="self-stretch relative rounded-2xl max-w-full overflow-hidden h-[360px] shrink-0 object-cover"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-2">
              <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit">
                Medical Vehicle/Gurney
              </h1>
              <p className="self-stretch relative text-base text-dimgray w-[75%]">
                Outfitted with the latest in technology, onboard entertainment,
                a professional medical staff, and space for family members, our
                medical van is perfect for longer distances and special care
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fleet;
