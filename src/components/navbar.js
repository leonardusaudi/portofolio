import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [top, setTop] = useState(true);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset >= 90 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <div>
      <nav className={`fixed w-full h-20 ${!top && `shadow-md bg-white`}`}>
        <div className="flex justify-between items-left w-full h-full px-4 2xl:px-16">
          <Link className="cursor-pointer" activeClass="active" to="main" spy={true} smooth={true} offset={0} duration={500}>
            <div className="flex">
              <Image
                src="/logo.png"
                alt="Logo"
                width="100"
                height="75"
                className="cursor-pointer"
                priority
              />
              <h2 className="lg:mt-6 sm:mt-4 sm:mr-20 max-sm:mt-4 font-semibold text-neutral-500">
                Leonardus Audi Wibianto
              </h2>
            </div>
          </Link>
          <div className="hidden sm:flex">
            <ul className="hidden sm:flex">
            <Link className="cursor-pointer" activeClass="active" to="main" spy={true} smooth={true} offset={0} duration={500}>
                <li className="mt-6 mr-6 font-semibold text-neutral-500 hover:text-neutral-600">
                  Home
                </li>
              </Link>
              <Link className="cursor-pointer" activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                <li className="mt-6 mr-6 font-semibold text-neutral-500 hover:text-neutral-600">
                  About
                </li>
              </Link>
              <Link className="cursor-pointer" activeClass="active" to="portofolio" spy={true} smooth={true} offset={0} duration={500}>
                <li className="mt-6 mr-6 font-semibold text-neutral-500 hover:text-neutral-600">
                  Portofolio
                </li>
              </Link>
              <Link className="cursor-pointer" activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                <li className="mt-6 mr-6 font-semibold text-neutral-500 hover:text-neutral-600">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div
            className="mt-6 mr-6 sm:hidden cursor-pointer pl-24"
            onClick={handleNav}
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div className="cursor-pointer hover:scale-110 ease-in duration-200 text-gray-900 bg-white max-sm:mb-10 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-full text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700" onClick={handleNav}>
              <AiOutlineClose size={20} />
            </div>
          </div>
          <div className="flex-col py-4">
            <ul>
              <Link className="cursor-pointer" activeClass="active" to="main" spy={true} smooth={true} offset={0} duration={500}>
                <li
                  className="py-4 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </li>
              </Link>
              <Link className="cursor-pointer" activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
                <li
                  className="py-4 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </li>
              </Link>
              <Link className="cursor-pointer" activeClass="active" to="portofolio" spy={true} smooth={true} offset={0} duration={500}>
                <li
                  className="py-4 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Portofolio
                </li>
              </Link>
              <Link className="cursor-pointer" activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                <li
                  className="py-4 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700" />
          <p className="text-sm text-gray-500 float-right mt-3 mr-5">
            © by Leonardus Audi Wibianto
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
