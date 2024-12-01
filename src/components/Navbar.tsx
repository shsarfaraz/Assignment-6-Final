import { Button } from "@/components/ui/button";
const NavBar = () => {
    return (
      <nav className="container mx-auto px-6 py-4 bg-[#F7F7F7]">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
          <img src="../images/Ddsgnr Library.svg" alt="Logo" width={130.6} height={30.38} />
            <span className="ml-2 text-xl font-semibold"></span>
          </div>
  
          <div className="bg-white px-4 gap-10 hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-gray-600">Home</a>
            <a href="#" className="hover:text-gray-600">Courses</a>
            <a href="#" className="hover:text-gray-600">Services</a>
            <a href="#" className="hover:text-gray-600">Achievement</a>
            <a href="#" className="hover:text-gray-600">About Us</a>
            <a href="#" className="hover:text-gray-600">Testimonial</a>
          
  
          <div className="hidden md:flex items-center space-x-4 pr-5">
            <Button variant="outline">Login</Button>
            <Button variant="default">Sign Up</Button>
          </div>
          </div>
          <button className="md:hidden">
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    );
  };
  
  export default NavBar;