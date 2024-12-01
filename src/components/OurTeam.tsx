import React from 'react'

function OurTeam() {
  return (
    <div>
      <section className="bg-[#F7F7F7] py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-[32px] lg:text-5xl">
              Our team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-18px sm:p-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            <div className="flex flex-col items-center">
              <img
                src="../TeamImages/Image-01.png"
                alt="James Nduku"
                className="w-[80px] h-[80px] object-cover rounded-lg"
              />
              <p className="text-center text-[16px] font-semibold mt-2">James Nduku</p>
              <p className="text-center text-[16px] mt-2">Marketing Coordinator</p>
              <div className="flex space-x-4 mt-4">
                <div>
                  <img
                    src="../SocialIcons/LinkedIn.png"
                    alt="LinkedIn Icon"
                    className="w-[24px] h-[24px] object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="../SocialIcons/Twitter.png"
                    alt="Twitter Icon"
                    className="w-[24px] h-[24px] object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="../SocialIcons/Dribble.png"
                    alt="Dribble Icon"
                    className="w-[24px] h-[24px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="../TeamImages/Image-02.png"
                alt="Alice Smith"
                className="w-[80px] h-[80px] object-cover rounded-lg"
              />
              <p className="text-center text-[16px] font-semibold mt-2">Alice Smith</p>
              <p className="text-center text-[16px] mt-2">Nursing Assistant</p>
              <div className="flex space-x-4 mt-4">
                <div>
                  <img
                    src="../SocialIcons/LinkedIn.png"
                    alt="LinkedIn Icon"
                    className="w-[24px] h-[24px] object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="../SocialIcons/Twitter.png"
                    alt="Twitter Icon"
                    className="w-[24px] h-[24px] object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="../SocialIcons/Dribble.png"
                    alt="Dribble Icon"
                    className="w-[24px] h-[24px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="../TeamImages/Image-03.png"
                alt="John Doe"
                className="w-[80px] h-[80px] object-cover rounded-lg"
              />
              <p className="text-center text-[16px] font-semibold mt-2">John Doe</p>
              <p className="text-center text-[16px] mt-2">Medical Assistant</p>
              <div className="flex space-x-4 mt-4">
                <div>
                  <img
                    src="../SocialIcons/LinkedIn.png"
                    alt="LinkedIn Icon"
                    className="w-[24px] h-[24px] object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="../SocialIcons/Twitter.png"
                    alt="Twitter Icon"
                    className="w-[24px] h-[24px] object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src="../SocialIcons/Dribble.png"
                    alt="Dribble Icon"
                    className="w-[24px] h-[24px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className=" grid-cols-1 sm:grid-cols-3 gap-8 mt-24 hidden sm:grid">
            <div className="flex flex-col items-center">
              <img
                src="../TeamImages/Image-04.png"
                alt="Erick Kipkemboi"
                className="w-[80px] h-[80px] object-cover rounded-lg"
              />
              <p className="text-center text-[16px] font-semibold mt-2">Erick Kipkemboi</p>
              <p className="text-center text-[16px] mt-2">Web Designer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="../TeamImages/Image-05.png"
                alt="Stephen Kerubo"
                className="w-[80px] h-[80px] object-cover rounded-lg"
              />
              <p className="text-center text-[16px] font-semibold mt-2">Stephen Kerubo</p>
              <p className="text-center text-[16px] mt-2">President of Sales</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="../TeamImages/Image-06.png"
                alt="John Leboo"
                className="w-[80px] h-[80px] object-cover rounded-lg"
              />
              <p className="text-center text-[16px] font-semibold mt-2">John Leboo</p>
              <p className="text-center text-[16px] mt-2">Dog Trainer</p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center py-10 sm:hidden bg-[#F7F7F7]">
        <button className="px-8 py-2  border border-black rounded bg-[#F7F7F7]
         text-black text-sm hover:bg-gray-50">
          View All 
        </button>
    </div>
    </div>
  )
}

export default OurTeam