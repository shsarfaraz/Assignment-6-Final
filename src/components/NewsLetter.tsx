import { Underline, UnderlineIcon } from 'lucide-react';
import React from 'react';

function NewsLetter() {
  return (
    <div className="  flex flex-col lg:flex-row">
     
      <div className="lg:pl-20 lg:pt-48 text-center lg:text-left px-4 lg:px-0">
        <h1 className="text-[18px] font-semibold">
          Subscribe to our newsletter
        </h1>
        <p className="text-[14px] pt-2">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
        </p>
      </div>

      
      <div className="gap-2 flex flex-col lg:pl-[500px] lg:pt-44 px-4 lg:px-0 mt-8 lg:mt-0">
        <div className="flex gap-2 flex-col lg:flex-row">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full lg:w-[265px] h-[48px] rounded-lg pl-3 text-sm border border-black"
          />
          <button className="w-full lg:w-[119px] h-[48px] rounded-lg border border-black">
            Subscribe
          </button>
        </div>
        <p className="mt-4 text-center lg:text-left text-[12px] font-normal">
          By subscribing you agree to with our{' '}
          <a href="#" className="underline">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
}

export default NewsLetter;
