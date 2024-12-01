import React from 'react';
import { Clock, Star } from 'lucide-react';

interface CourseCardProps {
  category: string;
  title: string;
  description: string;
  duration: string;
  rating: string;
  price: string;
  image: string; 
}

interface Course extends CourseCardProps {}

const CourseCard: React.FC<CourseCardProps> = ({ 
  category, 
  title, 
  description, 
  duration, 
  rating, 
  price, 
  image 
}) => {
  return (
    
    <div className=" 
  
    bg-[#F7F7F7] rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image}
          alt={title} 
          className="w-full md:h-fit sm:h-fit object-cover rounded-t-lg"
        />
      </div>
      
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <span className="text-xs sm:text-sm font-semibold text-gray-600">{category}</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">{rating}</span>
          </div>
        </div>
        <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center text-gray-500">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="text-xs sm:text-sm">{duration}</span>
          </div>
          <span className="font-bold text-base sm:text-lg">${price}</span>
        </div>
        
        <button className="w-full mt-3 sm:mt-4 py-1.5 sm:py-2 bg-black text-white text-sm sm:text-base rounded-lg hover:bg-gray-800 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

const CourseGrid: React.FC = () => {
  const courses: Course[] = [
    {
      title: "UX/UI Design 201",
      category: "Design",
      description: "Learn the fundamentals of UX/UI design with practical projects and real-world examples.",
      duration: "48 hrs • 24 Hrs",
      rating: "5.0",
      price: "400",
      image: "/Courses/Image-01.png" 
    },
    {
      title: "Introduction to Python",
      category: "Programming",
      description: "Master Python programming from basics to advanced concepts with hands-on practice.",
      duration: "36 hrs • 20 Hrs",
      rating: "5.0",
      price: "400",
      image: "/Courses/Image-02.png" 
    },
    {
      title: "Data Analysis for Beginners",
      category: "Business",
      description: "Learn data analysis techniques and tools to make data-driven business decisions.",
      duration: "30 hrs • 18 Hrs",
      rating: "5.0",
      price: "400",
      image: "/Courses/Image-03.png" 
    },
    
    {
      title: "Art Specialization",
      category: "Art",
      description: "Develop your artistic skills with comprehensive training in various mediums.",
      duration: "40 hrs • 22 Hrs",
      rating: "5.0",
      price: "400",
      image: "/Courses/Image-04.png" 
    },
    {
      title: "Rule of Law",
      category: "Law",
      description: "Understanding legal principles and their application in modern society.",
      duration: "45 hrs • 25 Hrs",
      rating: "5.0",
      price: "400",
      image: "/Courses/Image-05.png" 
    },
    {
      title: "Introduction to Webflow",
      category: "Tech",
      description: "Build professional websites without coding using Webflow's powerful platform.",
      duration: "32 hrs • 16 Hrs",
      rating: "5.0",
      price: "400",
      image: "/Courses/Image-06.png" 
      
    }
  ];
  

  return (
    <main className="min-h-screen  py-6 sm:py-12">
      <div className="max-w-[428px] sm:max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} /> 
          ))}
        </div>

       
       

       
      </div>

     
      
    </main>
  );
};

export default CourseGrid;
