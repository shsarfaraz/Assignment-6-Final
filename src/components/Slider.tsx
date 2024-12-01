import React from 'react';

function Slider() {
  return (
    <div>
      <div className="bg-[#F7F7F7] py-20 flex items-center justify-between">
       
        <div className="pl-[40px] sm:pl-[60px] md:pl-[80px]"> 
          <img 
            src='../TeamImages/Slider Dots.png' 
            alt="Slider Dots" 
            className="w-[72px] h-[8px]"  
          />
        </div>

       
        <div className="pr-[40px] sm:pr-[60px] md:pr-[80px]"> 
          <img 
            src='../TeamImages/Slider Buttons.png' 
            alt="Slider Buttons" 
            className="w-[111px] h-[48px]"  
          />
        </div>
      </div>
      <div className="bg-[#F7F7F7] py-10"> 
      </div>
    </div>
  );
}

export default Slider;
