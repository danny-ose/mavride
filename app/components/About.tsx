import React from "react";
import Button from "./Button";
import Image from "next/image";

const About = () => {
  return (
    <div className="absolute w-[100%] left-[50%] translate-x-[-50%] top-[700px] h-[2800px] overflow-hidden flex flex-col items-center justify-center gap-20 text-left text-13xl text-white font-space-grotesk">
      <div className="w-full overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[140px]">
        <div className="w-full overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[100px]">
          <div className="w-full flex flex-col items-start justify-start gap-8 [align-self:start]">
            {/* ABOUT SECTION */}
            <div className="w-[90%] mx-auto rounded-13xl bg-midnightblue-200 flex flex-row items-start justify-start p-16 box-border gap-[64px]">
              <div className="self-stretch flex flex-col items-start justify-between">
                <div className="flex flex-col items-start justify-center gap-2 translate-y-[20%]">
                  <h1 className="m-0 relative text-inherit capitalize font-bold font-inherit inline-block w-full">
                    About Us
                  </h1>
                  <p className="relative text-xl leading-[140%] text-ghostwhite inline-block w-[50%] pb-12 mb-20">
                    We don't just transport you to your appointments; we are a
                    part of your health journey. Our mission, vision, and values
                    reflect our dedication:
                  </p>

                  <div className="w-[20%] translate-y-[350%] cursor-pointer [border:none] py-4 px-16 bg-ghostwhite self-stretch rounded flex flex-row items-center justify-start">
                    <div className="relative text-base font-medium font-space-grotesk text-mediumblue-100 text-left mx-auto">
                      <Button type="button" title="Book A Ride" />
                    </div>
                  </div>
                </div>

                <Image
                  src={"/ambulance.png"}
                  alt="ambulance"
                  width={700}
                  height={700}
                  className="w-[50%] flex-1 relative rounded-2xl overflow-hidden object-cover left-[50%] translate-x-[35%] translate-y-[-50%]"
                />
              </div>
            </div>

            {/* FEATURES LIST */}
            <div className="mx-auto w-[90%] rounded-13xl flex flex-row items-start justify-start gap-[1px] text13xl text-midnightblue-200 border border-solid border-darkblue-200">
              <div className="flex flex-col items-start justify-start border-r-[1px] border-solid border-darkblue-200">
                <div className="box-border w-[665px] h-[375px] flex flex-row items-center justify-start py-16 px-8 gap-8 border-b border-solid border-darkblue-200">
                  <Image
                    src={"/safety.png"}
                    alt="safety-icon"
                    width={80}
                    height={80}
                  />
                  <div className="w-[489px] flex flex-col items-start justify-center">
                    <h1 className="m-0 relative text-inherit font-bold font-inherit">
                      Mission
                    </h1>
                    <p className="self-stretch relative text-base text-dimgray">
                      We don't just transport you to your appointments; we are a
                      part of your health journey. Our mission, vision, and
                      values reflect our dedication:
                    </p>
                  </div>
                </div>

                <div className="w-full h-[375px] flex flex-row items-center justify-start py-16 px-8 box-border gap-8">
                  <Image
                    src={"/beauty.png"}
                    alt="beauty-icon"
                    width={80}
                    height={80}
                  />
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <h1 className="m-0 relative text-inherit font-bold font-inherit">
                      Values
                    </h1>
                    <p className="self-stretch relative text-base text-dimgray">
                      At Mavride, we are driven by Safety, Compassion,
                      Reliability, Innovation, Integrity, and Community
                    </p>
                  </div>
                </div>
              </div>

              <div className="self-stretch flex flex-col items-start justify-start w-full">
                <div className="box-border w-full flex flex-row items-center justify-start py-16 px-8 gap-8 border-b border-solid border-darkblue-200">
                  <Image
                    src={"/shield.png"}
                    alt="shield-icon"
                    width={80}
                    height={80}
                  />
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <h1 className="m-0 relative text-inherit font-bold font-inherit">
                      Vision
                    </h1>
                    <p className=" self-stretch relative text-base text-dimgray">
                      Vision: “To set the industry standard for Non-Emergency
                      <br />
                      Medical Transportation, offering unparalleled quality and
                      care
                    </p>
                  </div>
                </div>

                <div className="flex-1 box-border w-full flex flex-row items-center justify-start py-16 px-8 gap-8 border-b border-solid border-darkblue-200 lg:flex-row lg:gap-8 lg:items-center lg:justify-start md:flex-row md:gap-8 md:items-center md:justify-start sm:flex-row sm:gap-8 sm:items-center sm:justify-start">
                  <Image
                    src={"/alarm.png"}
                    alt="alarm-icon"
                    width={80}
                    height={80}
                  />
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <h1 className="m-0 relative text-inherit font-bold font-inherit">
                      Leadership
                    </h1>
                    <p className="self-stretch relative text-base text-dimgray">
                      Meet our dedicated team and the consulting services that
                      <br />
                      distinguish us the in NEMT landscape.
                    </p>
                  </div>
                </div>

                <div className="w-full flex flex-row items-center justify-start py-16 px-8 box-border gap-8">
                  <Image
                    src={"/handshake.png"}
                    alt="handshake-icon"
                    width={80}
                    height={80}
                  />
                  <div className="flex-1 flex flex-col items-start justify-center">
                    <h1 className="m-0 relative text-inherit font-bold font-inherit">
                      Partnership
                    </h1>
                    <div className="self-stretch relative text-base text-dimgray">
                      In our mission to serve every individual in need of
                      Non-Emergency Medical Transport, we have been approved to
                      operate in this industry, vetted by the highest security
                      standards, and thus authorized to collaborate with our
                      esteemed partners: Government, Health Insurance Companies,
                      Hospitals, and Private Health.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
