import React from 'react';

const CoursesSection = () => {
  const categories = [
    {
      title: "Design & Development",
      description: "50+ Courses Available",
      imageUrl: "../icons/pen-tool-2.png" 
    },
    {
      title: "Marketing",
      description: "50+ Courses Available", 
      imageUrl: "../icons/volume-high.png"
    },
    {
      title: "Development",
      description: "50+ Courses Available",
      imageUrl: "../icons/group.png"
    }
  ];

  const allCategories = [
    ...categories,
    {
      title: "Communication",
      description: "50+ Courses Available",
      imageUrl: "../icons/microphone.png"
    },
    {
      title: "Digital Marketing",
      description: "50+ Courses Available",
      imageUrl: "../icons/link.png"
    },
    {
      title: "Self Development",
      description: "50+ Courses Available",
      imageUrl: "../icons/arrow-2.png"
    },
    {
      title: "Business",
      description: "50+ Courses Available",
      imageUrl: "../icons/briefcase.png"
    },
    {
      title: "Finance",
      description: "50+ Courses Available",
      imageUrl: "../icons/book.png"
    },
    {
      title: "Consulting",
      description: "50+ Courses Available",
      imageUrl: "../icons/book-2.png"
    }
  ];

  return (
    <div className="w-full max-w-[428px] md:max-w-[1280px] mx-auto px-4">
      <div className="mt-2">
        <div className="mt-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl text-center sm:text-3xl font-bold text-gray-900 mb-2">
              Explore Courses By Category
            </h2>
            <p className="text-center text-sm md:text-base text-gray-600 mb-8">
              Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
            </p>
           
          </div>

        
          <div>
            <div>
            <div className="space-y-4 md:hidden">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      <img 
                        src={category.imageUrl} 
                        alt={category.title}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        {category.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-500">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              </div>
             <div className="flex justify-center mt-4">
                
              </div>
            </div>
          </div>

          
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
            {allCategories.map((category, index) => (
              <div 
                key={index}
                className="p-4 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md 
                transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <img 
                      src={category.imageUrl} 
                      alt={category.title}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
    
  );
};

export default CoursesSection;