import Image from "next/image";
import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header className="absolute w-[90%] left-[50%] translate-x-[-50%] top-[10px] overflow-hidden flex flex-col items-center justify-center gap-20 text-left text-45xl text-midnightblue-100 font-space-grotesk">
      <div className="self-stretch rounded-2xl flex flex-row items-center justify-between border border-solid border-darkblue-200">
        {/* NAV LOGOS */}
        <div className="self-stretch flex-1 flex flex-row items-center justify-between">
          <div className="rounded-tl-2xl rounded-tr-none rounded-br-none rounded-bl-2xl bg-mediumblue-200 flex flex-row items-center justify-start py-4 px-8 gap-[11px]">
            <Image
              src={"/Vector.png"}
              alt="icon"
              width={38.9}
              height={41}
              className="relative rounded-md object-cover"
            />
            <Image
              src={"/Mavride.png"}
              alt="logo"
              width={128.3}
              height={34}
              className="relative object-cover"
            />
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className="m-o self-stretch flex flex-row items-center justify-start">
          <div className="cursor-pointer [border:none] py-0 px-8 bg-mediumblue-200 self-stretch flex flex-row items-center justify-center border-t-[1px] border-solid border-darkblue-200 border-b-[1px] border-l-[1px]">
            <div className="relative text-base font-medium font-space-grotesk text-darkblue-100 text-left">
              info@mavride.net
            </div>
          </div>
          <div className="cursor-pointer [border:none] py-0 px-8 bg-mediumblue-200 self-stretch flex flex-row items-center justify-center border-t-[1px] border-solid border-darkblue-200 border-b-[1px] border-l-[1px]">
            <div className="relative text-base font-medium font-space-grotesk text-darkblue-100 text-left">
              281-985-9981
            </div>
          </div>
          <div className="cursor-pointer [border:none] py-0 px-8 bg-mediumblue-200 self-stretch flex flex-row items-center justify-center border-t-[1px] border-solid border-darkblue-200 border-b-[1px] border-l-[1px]">
            <div className="relative text-base font-medium font-space-grotesk text-darkblue-100 text-left">
              440 Loiusiana Str Ste 900, Houston Texas 77002
            </div>
          </div>

          <div className="cursor-pointer [border:none] py-0 px-8 bg-mediumblue-100 self-stretch rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-none flex flex-row items-center justify-start gap-2">
            <div className="relative text-base font-medium font-space-grotesk text-white text-left">
              <Button type="button" title="Sign Up" />
            </div>
          </div>
        </nav>
      </div>

      {/* HERO SECTION */}
      <div className="w-[50%] mx-auto self-stretch overflow-hidden flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-center justify-start gap-2">
          <h1 className="m-0 relative text-inherit font-bold font-inherit">
            Your Journey To Wellness
          </h1>
          <p className="self-stretch relative text-xl text-dimgray text-center">
            Welcome to Mavride, your trusted partner in Non-Emergency Medical
            Transport (NEMT). Powered by cutting-edge technology and a steadfast
            commitment to providing safe, secure, and stylish transportation
            services, we ensure you arrive on time for your healthcare
            appointments. Experience the ease and peace of mind that comes with
            scheduling a ride through Mavride with a guaranteed promise of care.
          </p>
        </div>
      </div>

      <Image
        src={"/mediaid.png"}
        alt="patient-aid"
        width={2500}
        height={444}
        className="relative rounded-13xl object-cover"
      />
    </header>
  );
};

export default Header;
