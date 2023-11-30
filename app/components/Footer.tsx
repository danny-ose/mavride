import React from 'react'
import Button from './Button';

const Footer = () => {
  return (
    <div className="w-[90%] h-[277px] px-[120px] pt-8 pb-16 bg-midnightblue-200 border-b border-white flex-col justify-start items-center gap-8 inline-flex top-[1000px] translate-y-[2530%] translate-x-[5.5%]">
      <div className="h-[97px] flex-col justify-start items-center gap-4 flex">
        <div className="text-center text-white text-[32px] font-bold font-['Space Grotesk'] capitalize">
          Come Work With Us
        </div>
        <div className="w-[582px] text-center text-white text-base font-normal font-['Space Grotesk'] capitalize">
          Interested in driving with us or becoming a part of our dedicated
          team? Visit our career page to view openings and submit an
          application.
        </div>
      </div>
      <div className="px-16 py-4 bg-blue-700 rounded justify-start items-center gap-2.5 inline-flex">
        <div className="text-violet-50 text-base font-medium font-['Space Grotesk']">
          <Button type='button' title='Join Us'/>
        </div>
      </div>
      <div className="w-[116.3%] h-[100px] px-2.5 py-10 bg-midnightblue-200 justify-center items-center gap-2.5 inline-flex border-t">
        <div className="text-white text-base font-medium font-['Space Grotesk']">
          All rights reserved by Mavride
        </div>
      </div>
    </div>
  );
}

export default Footer