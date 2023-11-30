import React from "react";
import Button from "./Button";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <section className="absolute w-[100%] left-[50%] translate-x-[-50%] translate-y-[70%] top-[700px] h-[2800px] overflow-hidden flex flex-col items-center justify-center gap-20 text-left text-13xl text-midnightblue-200 font-space-grotesk mt-">
        <div className="w-[100%] h-[838px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[110px] text-45xl translate-y-[50%] translate-x-[6%]">
          <div className="flex flex-row items-start justify-start gap-[102px] h-[534px] ml-[5px]">
            <div className="flex flex-col items-start justify-start">
              <h1 className="m-0 relative text-inherit capitalize font-bold font-inherit">
                Our Services
              </h1>
              <div className="flex flex-col items-start justify-start gap-4 text-xl text-dimgray">
                <p className="relative font-medium inline-block w-[50%]">
                  With technology at the heart of our services, we ensure
                  seamless scheduling and real-time updates for every journey.
                  Mavride offers a comprehensive range of non-emergency medical
                  transportation services, including:
                </p>
                <div className="flex flex-col items-start justify-start gap-8 text-base">
                  <ul className="w-[100%] flex flex-col items-start justify-start gap-2">
                    <li>
                      Medical appointments (doctor visits, chemotherapy,
                      dialysis)
                    </li>
                    <li>Hospital admissions/discharges</li>
                    <li>Rehab centre support</li>
                    <li>Adult care facilities</li>
                    <li>Bedside-to-bedside accompainment</li>
                    <li>Interstate medical transport</li>
                    <li>Pharmacy pick-up</li>
                    <li>
                      And all other places our members get Medicaid/Medicare and
                      Private health insurance services.
                    </li>
                  </ul>

                  <div className="cursor-pointer [border:none] py-4 px-16 bg-mediumblue-100 rounded flex flex-row items-center justify-start">
                    <div className="relative text-base font-medium font-space-grotesk text-ghostwhite text-left">
                      <Button type="button" title="Get Started" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[100%] h-[534px] flex flex-row items-start justify-start gap-1">
              <div className="w-[100%] h-[495px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-1">
                <Image
                  src={"/counsel.png"}
                  alt="counsel"
                  width={314}
                  height={177}
                  className="realtive rounded-lg object-cover translate-x-[-65%]"
                />
                <Image
                  src={"/aid.png"}
                  alt="mediaid"
                  width={250}
                  height={304}
                  className="relative rounded-lg object-cover translate-x-[38%] translate-y-[-80%]"
                />
                <Image
                  src={"/doctor.png"}
                  alt="doctor"
                  width={265}
                  height={265}
                  className="relative rounded-lg object-cover translate-x-[-68%] translate-y-[-95%]"
                />
                <Image
                  src={"/therapy.png"}
                  alt="therapy"
                  width={245}
                  height={265}
                  className="relative rounded-lg object-cover translate-x-[35%] translate-y-[-189%]"
                />
              </div>
            </div>
          </div>

          <div className="w-[100%] h-[194px] overflow-hidden shrink-0 flex flex-col items-center justify-end gap-2 translate-x-[-5%]">
            <h1 className="m-0 text-inherit capitalize font-bold font-inherit inline-block h-[82px] ml-2 translate-y-[-10%] mt-3 ">
              We're Vetted And Trusted
            </h1>
          </div>
        </div>
        <p className="text-xl text-dimgray text-center inline-block w-[70%] h-[104px] ml-px translate-y-[340%]">
          At Mavride we are committed to ensuring that we not only provide
          transportation but are qualified to operate in the industry having
          obtained every required license from our private, local, state, and
          federal partners. We have also been vetted at the highest security
          level in the country and have been approved to provide Non-Emergency
          Medical Transport to every resident in this country who needs our
          services.
        </p>
      </section>

      <section className="absolute w-[100%] left-[50%] translate-x-[-50%] translate-y-[98%] top-[800px] h-[2800px] overflow-hidden flex flex-col items-center justify-center gap-20 text-left text-45xl text-midnightblue-200 font-space-grotesk mt-5">
        <div className="w-[100%] h-[750px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[64px]">
          <div className="w-[90%] flex flex-row items-center justify-between h-[61px] ml-px lg:flex-row lg:gap-[85px] lg:items-start lg:justify-start md:flex-row md:gap-[85px] md:items-start md:justify-start sm:flex-row sm:gap-[85px] sm:items-start sm:justify-start translate-y-[550%] mt-5">
            <div className="rounded-lg bg-ghostwhite flex flex-row items-center justify-center p-4">
              <Image
                src={"/medicaid.png"}
                alt="medicaid-icon"
                width={116.2}
                height={29}
              />
            </div>
            <div className="rounded-lg bg-ghostwhite flex flex-row items-center justify-center p-4">
              <Image
                src={"/medicare.png"}
                alt="medicare-icon"
                width={124}
                height={29}
              />
            </div>
            <div className="rounded-lg bg-ghostwhite flex flex-row items-center justify-center p-4">
              <Image
                src={"/cigna.png"}
                alt="cigna-icon"
                width={73.8}
                height={29}
              />
            </div>
            <div className="rounded-lg bg-ghostwhite flex flex-row items-center justify-center p-4">
              <Image
                src={"/united-health.png"}
                alt="united-health-icon"
                width={182}
                height={28.7}
              />
            </div>
            <div className="rounded-lg bg-ghostwhite flex flex-row items-center justify-center p-4">
              <Image
                src={"/aetna.png"}
                alt="aetna-icon"
                width={78.3}
                height={28.5}
              />
            </div>
            <div className="rounded-lg bg-ghostwhite flex flex-row items-center justify-center p-4">
              <Image
                src={"/molina-healthcare.png"}
                alt="molina-healthcare-icon"
                width={255.5}
                height={29}
              />
            </div>
          </div>
        </div>

        <div className="w-[65%] flex flex-row items-center justify-between ml-[27px] lg:flex-row lg:gap-[102px] lg:items-start lg:justify-start md:flex-row md:gap-[102px] md:items-start md:justify-start sm:flex-row sm:gap-[102px] sm:items-start sm:justify-start translate-x-[-20%] translate-y-[20%]">
          <div className="flex flex-col items-start justify-start">
            <h1 className="m-0 relative text-inherit capitalize font-bold font-inherit">
              Trained And Certified
            </h1>
            <div className="flex flex-col items-start justify-start gap-4 text-xl text-dimgray">
              <p className="relative font-medium inline-block w-[60%]">
                Driven by excellence, we support our team with top-tier training
                resources:
              </p>

              <div className="flex flex-col items-start justify-start gap-8 text-base">
                <div className="w-[65%] flex flex-col items-start justify-start gap-2">
                  <div className="self-stretch relative">
                    <b>Driver training:</b>
                    <span>
                      {" "}
                      Comprehensive course for driver training and safety.
                      ctaa.org/pass-online
                    </span>
                  </div>

                  <div className="self-stretch relative mt-2">
                    <b>CPR/First aid:</b>
                    <span>
                      {" "}
                      Certification for emergency readiness,
                      redcross.org/take-a-class
                    </span>
                  </div>

                  <div className="self-stretch relative mt-">
                    <b>Defensive driving:</b>
                    <span>
                      {" "}
                      Skills development for accident prevention. nsc.org
                    </span>
                  </div>

                  <div className="self-stretch relative mt-">
                    <b>Drug, alcohol, and background check:</b>
                    <span>
                      {" "}
                      It is of extreme importance to us at Mavride to ensure the
                      trustworthiness and professionalism of our staff before
                      employment and randomly while still employed with us.
                      occusscreen.com, c-dat.net
                    </span>
                  </div>
                </div>

                <div className="cursor-pointer [border:none] py-4 px-16 bg-mediumblue-100 rounded flex flex-row items-center justify-start">
                  <div className="relative text-base font-medium font-space-grotesk text-ghostwhite text-left">
                    <Button type="button" title="Get Started" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Image
            src={"/certified.png"}
            alt="certified"
            width={500}
            height={500}
            className="relative overflow-hidden shrink-0 translate-x-[100%]"
          />
        </div>
      </section>
    </>
  );
};

export default Services;
