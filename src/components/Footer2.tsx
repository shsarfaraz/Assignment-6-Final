import React from 'react';

function Footer2() {
  return (
    <div className="px-1 pt-10">
      
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 items-center text-center">
        
        <div className="flex flex-col items-center">
          <img
            src="../images/Ddsgnr Library.svg"
            alt="Logo"
            width={130.6}
            height={40}
          />
        </div>

        
        <div className="space-y-2">
          <a href="#" className="font-bold hover:text-gray-600">
            Courses
          </a>
          <p>Business</p>
          <p>Development</p>
          <p>Technology</p>
          <p>Design</p>
          <p>Programming</p>
        </div>

        
        <div className="space-y-2">
          <a href="#" className="font-bold hover:text-gray-600">
            Resources
          </a>
          <p>Career</p>
          <p>Resume</p>
          <p>Learning</p>
          <p>Interview Preparation</p>
          <p>Jobs</p>
        </div>

        
        <div className="space-y-2">
          <a href="#" className="font-bold hover:text-gray-600">
            About Us
          </a>
          <p>Contact</p>
          <p>Help/Support</p>
          <p>FAQ</p>
          <p>Terms and Conditions</p>
          <p>Partners</p>
        </div>
      </div>

      
      <div className="mt-14 h-1 bg-black lg:bg-black w-full lg:px-24"></div>
    </div>
  );
}

export default Footer2;
