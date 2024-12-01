import React from "react";
import { Button } from "./ui/button";
const HeroSection = () => {
    return (
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Learn new skills online with ease
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
            </p>
            <div className="flex gap-4">
              <Button variant="default" size="lg">
                Start learning now
              </Button>
              <Button variant="outline" size="lg">
                Explore Courses
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
  <img 
    src="/images/Image.svg"
    alt="Student with book"
    className="max-w-[640px] max-h-[900px] w-full h-auto object-contain rounded-lg"
  />
</div>

        </div>
      </div>
    );
  };

  export default HeroSection;