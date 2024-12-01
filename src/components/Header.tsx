const Header = () => {
    return (
      <div className="hidden md:flex items-center justify-between bg-white py-2 px-6 border-b">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-[width]-205px text-[height]-21px">Phone Number: 956 742 455 678   |</span>
          </div>
          <div className="flex items-center">
            <span className="text-md">Email: <a href="mailto:info@ddsgnr.com">  info@ddsgnr.com</a></span> 
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <img src="../images/Social Links.svg" alt="Social Media Icons" className="h-5" />
        </div>
      </div>
    );
  };
  
  export default Header;
  