import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoChevronDown } from "react-icons/go";
import { PiUserCirclePlusThin } from "react-icons/pi";
import { SlMagnifier } from "react-icons/sl";
import { VscMenu } from "react-icons/vsc";
import { Link } from "react-router-dom";
import AllMicrosoftMenu from "./ui/AllMicrosoftMenu";
import { RiCloseLargeLine } from "react-icons/ri";

import { IoArrowBackOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSearchOpen, setmobileSearchOpen] = useState(false);
  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };
  const handleCloseSearchToggle = () => {
    setSearchOpen(false);
  };
  const handleMobileSearchToggle = () => {
    setmobileSearchOpen(!searchOpen);
  };
  const handleMobileCloseSearchToggle = () => {
    setmobileSearchOpen(false);
  };
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <nav className="bg-white shadow-md">
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex  ${
          mobileSearchOpen ? "gap-0" : "gap-5"
        } ${searchOpen ? "justify-center" : "justify-between"} `}
      >
        <div
          className={`ml:hidden flex items-center gap-5 ${
            mobileSearchOpen ? "w-full" : "w-auto"
          }`}
        >
   <div className="ml:hidden block cursor-pointer">
  {mobileMenuOpen ? (
    <RiCloseLargeLine onClick={handleMobileMenu} />
  ) : mobileSearchOpen ? (
    <IoArrowBackOutline onClick={handleMobileCloseSearchToggle} />
  ) : (
    <VscMenu onClick={handleMobileMenu} />
  )}
</div>

          <div
            className={`ml:hidden block cursor-pointer ${
              mobileSearchOpen ? "w-full" : "w-auto"
            }`}
          >
            <div
              className={`ml:hidden flex items-center gap-3 relative ${
                mobileSearchOpen ? "w-full" : "w-auto"
              }`}
            >
              {!mobileSearchOpen ? (
                ""
              ) : (
                <input
                  type="text"
                  placeholder="Search Microsoft.com"
                  className={`border-2 border-blue py-2 px-2 text-13 block ${
                    mobileSearchOpen ? "w-full" : "w-auto"
                  }  pl-12`}
                />
              )}
              <SlMagnifier
                onClick={handleMobileSearchToggle}
                className={`scale-x-[-1] w-5 h-5 cursor-pointer ${
                  mobileSearchOpen ? "absolute left-4" : "static"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="flex h-14 items-center gap-5">
          {/* Logo */}
          {mobileSearchOpen ? (
            ""
          ) : (
            <div className="flex-shrink-0">
              <img
                className="h-auto w-[108px]"
                src="/logo.png"
                alt="Microsoft"
              />
            </div>
          )}

          {/* Navigation Links */}
          {!searchOpen ? (
            <div className="hidden ml:flex space-x-8 text-13 ">
              <Link
                to={"/"}
                className="text-gray-700 hover:text-black hover:underline underline-offset-4 decoration-2 cursor-pointer"
              >
                Microsoft 365
              </Link>
              <Link
                to={"/"}
                className="text-gray-700 hover:text-black hover:underline underline-offset-4 decoration-2 cursor-pointer"
              >
                Office
              </Link>
              <Link
                to={"/"}
                className="text-gray-700 hover:text-black hover:underline underline-offset-4 decoration-2 cursor-pointer"
              >
                Copilot
              </Link>
              <Link
                to={"/"}
                className="text-gray-700 hover:text-black hover:underline underline-offset-4 decoration-2 cursor-pointer"
              >
                Windows
              </Link>
              <Link
                to={"/"}
                className="text-gray-700 hover:text-black hover:underline underline-offset-4 decoration-2 cursor-pointer"
              >
                Support
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center gap-6  ">
          {!searchOpen ? (
            <div className="relative ">
              <div
                onClick={handleMenu}
                className={`text-13 ml:flex hidden items-center gap-1 cursor-pointer py-5 px-4 hover:underline hover:underline-offset-4 decoration-2 ${
                  isOpen ? "bg-menubggray border border-gray-300" : "bg-white"
                }`}
              >
                All Microsoft <GoChevronDown className="w-4 h-4" />
              </div>
              <div
                className={`menu absolute  top-14 -right-50 z-30 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <AllMicrosoftMenu />
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="ml:flex items-center gap-3 hidden relative">
            {!searchOpen ? (
              ""
            ) : (
              <input
                type="text"
                placeholder="Search Microsoft.com"
                className="border border-black py-2 px-2 text-13 w-[55rem]"
              />
            )}
            <SlMagnifier
              onClick={handleSearchToggle}
              className={`scale-x-[-1] w-5 h-5 cursor-pointer ${
                searchOpen ? "absolute right-24" : "static"
              }`}
            />
            <div>
              {searchOpen ? (
                <button
                  className="text-13 cursor-pointer border border-black py-2 px-4"
                  onClick={handleCloseSearchToggle}
                >
                  Cancel
                </button>
              ) : (
                ""
              )}
            </div>
          </div>

          {!searchOpen && !mobileSearchOpen ? (
            <div>
              <AiOutlineShoppingCart className="w-6 h-6 cursor-pointer" />
            </div>
          ) : (
            ""
          )}
          {!searchOpen && !mobileSearchOpen ? (
            <div>
              <PiUserCirclePlusThin className="w-8 h-8 cursor-pointer" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navMenubg shadow-md z-20">
          <Link
            to={"/"}
            className="block text-gray-700 hover:text-black border-t border-b border-gray-300 p-5"
          >
            Microsoft 365
          </Link>
          <Link
            to={"/"}
            className="block text-gray-700 hover:text-black border-b border-gray-300 p-5"
          >
            Office
          </Link>
          <Link
            to={"/"}
            className="block text-gray-700 hover:text-black border-b border-gray-300 p-5"
          >
            Windows
          </Link>
          <Link
            to={"/"}
            className="block text-gray-700 hover:text-black border-b border-gray-300 p-5"
          >
            Surface
          </Link>
          <Link
            to={"/"}
            className="block text-gray-700 hover:text-black border-b border-gray-300 p-5"
          >
            Xbox
          </Link>
          <Link
            to={"/"}
            className="block text-gray-700 hover:text-black border-b border-gray-300 p-5"
          >
            Support
          </Link>
          <Link
            to={"/"}
            className=" text-gray-700 hover:text-black flex justify-between items-center gap-2 border-b border-gray-300 p-5"
          >
            Software <GoChevronDown />
          </Link>

          <Link
            to={"/"}
            className=" text-gray-700 hover:text-black flex justify-between items-center gap-2 border-b border-gray-300 p-5"
          >
            PCs & Devices <GoChevronDown />
          </Link>
          <Link
            to={"/"}
            className=" text-gray-700 hover:text-black flex justify-between items-center gap-2 border-b border-gray-300 p-5"
          >
            Entertainment <GoChevronDown />
          </Link>
          <Link
            to={"/"}
            className=" text-gray-700 hover:text-black flex justify-between items-center gap-2 border-b border-gray-300 p-5"
          >
            Business <GoChevronDown />
          </Link>
          <Link
            to={"/"}
            className=" text-gray-700 hover:text-black flex justify-between items-center gap-2 border-b border-gray-300 p-5"
          >
            Developer & IT <GoChevronDown />
          </Link>
          <Link
            to={"/"}
            className=" text-gray-700 hover:text-black flex justify-between items-center gap-2 border-b border-gray-300 p-5"
          >
            Other <GoChevronDown />
          </Link>
          <Link
            to={"/"}
            className="block text-gray-700 hover:text-black  border-b border-black p-5"
          >
            View Sitemap
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
