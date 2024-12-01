import React from 'react';

function Footer() {
  return (
    <div>
      
      <div className="hidden md:flex items-center justify-between bg-white py-10 mb-40 px-6 border-b">
        <div className="flex items-center space-x-4">
         
          <div className="flex items-center">
            <span className="text-sm">2023 Ddsgnr. All right reserved.</span>
          </div>

         
          <div className="flex items-center space-x-4">
            <span className="text-md">
              <a href="/privacy-policy" className="underline hover:text-blue-700">
                Privacy Policy
              </a>
            </span>
            <span className="text-md">
              <a href="/terms-of-service" className="underline hover:text-blue-700">
                Terms of Service
              </a>
            </span>
            <span className="text-md">
              <a href="/cookies-settings" className="underline hover:text-blue-700">
                Cookies Settings
              </a>
            </span>
          </div>
        </div>

       
        <div className="flex items-center space-x-2">
          <img src="../images/Social Links.svg" alt="Social Media Icons" className="h-5" />
        </div>
      </div>

      
      <div className="flex flex-col md:hidden bg-white py-4 px-4 border-b text-center space-y-4">
       
        <div className="text-sm">2023 Ddsgnr. All right reserved.</div>

        
        <div className="text-sm space-x-4">
          <a href="/privacy-policy" className="underline  hover:text-blue-700">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="underline hover:text-blue-700">
            Terms of Service
          </a>
          <a href="/cookies-settings" className="underline hover:text-blue-700">
            Cookies Settings
          </a>
        </div>

       
        <div className="flex justify-center space-x-4">
          <img src="../images/Social Links.svg" alt="Social Media Icons" className="h-5" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
