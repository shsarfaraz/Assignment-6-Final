import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/Navbar";
import CoursesSection from "@/components/CoursesSection";
import Base from "@/components/Base";
import Image from "next/image";
import Courses2 from "@/components/Courses2";

import OurTeam from "@/components/OurTeam";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";
import Footer2 from "@/components/Footer2";
import Trusted from "@/components/Trusted";


const HomePage = () => {
  return (
    <div
    className="min-h-screen bg-white">
      <Header />
      <NavBar />
      <HeroSection />
      <Trusted />
      <CoursesSection />
      <Base />
      <Courses2 />
      <OurTeam  />
      <CustomerTestimonials />
      <Slider />
      <NewsLetter />
      <Footer2 />
      <Footer />
      
      </div>
  )
};

export default HomePage;
