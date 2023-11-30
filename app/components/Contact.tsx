import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <>
      {/* CONTACT FORM */}
      <section className="absolute w-[100%] left-[50%] translate-x-[-50%] translate-y-[112%] top-[1700px] h-[2800px] overflow-hidden flex flex-col items-center justify-center gap-20 text-left text-45xl text-midnightblue-200 font-space-grotesk mt-5">
        <h1 className="m-0 relative text-inherit capitalize font-bold font-inherit">
          Contact Us
        </h1>
        <p className="flex flex-col items-start justify-start gap-8 text-base translate-y-[-190%]">
          Ready to schedule your next trip or do you just have questions?
          Connect with us:
        </p>
        <div className="w-[25%] h-[58px] p-4 rounded border border-slate-600 justify-start items-center gap-2.5 inline-flex translate-y-[-110%]">
          <div className="text-center text-slate-600 text-xl font-normal font-['Space Grotesk']">
            Fullname
          </div>
        </div>
        <div className="w-[25%] h-[58px] p-4 rounded border border-slate-600 justify-start items-center gap-2.5 inline-flex translate-y-[-210%]">
          <div className="text-center text-slate-600 text-xl font-normal font-['Space Grotesk']">
            Email
          </div>
        </div>
        <div className="w-[25%] h-[129px] p-4 rounded border border-slate-600 justify-start items-start gap-2.5 inline-flex translate-y-[-140%]">
          <div className="text-center text-slate-600 text-xl font-normal font-['Space Grotesk']">
            Details of inquiry
          </div>
        </div>
        <div className="w-[15%] h-[52px] px-16 py-4 bg-mediumblue-100 rounded justify-center items-center gap-2.5 inline-flex translate-y-[-340%]">
          <div className="w-[89px] text-center text-violet-50 text-base font-medium font-['Space Grotesk']">
            <Button type="submit" title="Send" />
          </div>
        </div>
      </section>

      <section className="absolute w-[100%] left-[50%] translate-x-[-50%] translate-y-[125%] top-[1900px] h-[2800px] overflow-hidden flex flex-col items-center justify-center gap-20 text-left text-45xl text-midnightblue-200 font-space-grotesk mt-5 py-2">
        <div className="flex-col justify-start items-center gap-4 flex bg-ghostwhite w-[90%] py-[90px]">
          <div className="text-center text-blue-950 text-[32px] font-bold font-['Space Grotesk'] capitalize">
            Request a quote
          </div>
          <div className="w-[30%] text-center text-darkblue-100 text-base font-normal font-['Space Grotesk'] capitalize mt-4">
            Need an estimate for your transport needs? Simply fill out a quote
            request and we’ll handle the rest.
          </div>
          <div className="mt-5 px-16 py-4 bg-mediumblue-100 rounded justify-start items-center gap-2.5 inline-flex">
            <div className="text-violet-50 text-base font-medium font-['Space Grotesk']">
              <Button type="button" title="Sign Me Up" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
