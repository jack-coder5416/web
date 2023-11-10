import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageIcon from './ImageIcon';
import { Logo1 } from '../assets';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };
  const handleAboutClick = () => {
    // Use the navigate function to go to the "/about" route
    navigate('/about');
  };
  const handleContactClick = () => {
    // Use the navigate function to go to the "/about" route
    navigate('/contact');
  };
  const handleGalleryClick = () => {
    // Use the navigate function to go to the "/about" route
    navigate('/gallery');
  };
  const handleEmployeeClick = () => {
    // Use the navigate function to go to the "/about" route
    navigate('/employees');
  };
  const handleHomeClick = () => {
    // Use the navigate function to go to the "/about" route
    navigate('/');
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col top-0 sticky z-10 h-screen">
      <div className="bg-[#1127ea] items-center px-[4.6%] py-[10px] flex flex-row gap-[6%] text-[17px]">
        <div className='flex flex-row gap-6 items-center'>
          {isScrolled?<ImageIcon url={Logo1} wt="32px" ht="32px"/>:<></>}
          <div className="text-[#fff] font-[500] cursor-pointer hover:text-[#ffffffc0]" onClick={handleHomeClick}>
            <h5 className="">Home</h5>
          </div>
        </div>
        <div
          className="relative text-[#fff] font-[500] cursor-pointer hover:text-[#ffffffc0]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h5 className="">Services</h5>
          {showDropdown && (
            <div className="absolute top-[100%] left-0 right-[-180%] bg-white text-black py-2 px-4 shadow-md rounded-sm">
              <div className="hover:bg-[#1127eaeb] hover:text-white hover:rounded-sm py-1 px-2 cursor-pointer text-[14px]" onClick={handleEmployeeClick}>
                Employee Details
              </div>
              <div className="hover:bg-[#1127eaeb] hover:text-white hover:rounded-sm py-1 px-2 cursor-pointer text-[14px]">
                Dropdown Item 2
              </div>
              
            </div>
          )}
        </div>
        <div className="text-[#fff] font-[500] cursor-pointer hover:text-[#ffffffc0]" onClick={handleGalleryClick}>
          <h5 className="">Gallery</h5>
        </div>
        <div className="text-[#fff] font-[500] cursor-pointer hover:text-[#ffffffc0]" onClick={handleEmployeeClick}>
          <h5 className="">Employee Section</h5>
        </div>
        <div className="text-[#fff] font-[500] cursor-pointer hover:text-[#ffffffc0]" onClick={handleAboutClick}>
          <h5 className="">About Us</h5>
        </div>
        <div className="text-[#fff] font-[500] cursor-pointer hover:text-[#ffffffc0]" onClick={handleContactClick}>
          <h5 className="">Contact Us</h5>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
