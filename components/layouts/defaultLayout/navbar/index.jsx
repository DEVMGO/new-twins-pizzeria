import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// components
import Button from "@/components/ui/button";
// images
import Logo from "@/public/assets/images/Logo.svg";
// icons
import { FiPhoneCall } from "react-icons/fi";
import { CiShoppingBasket } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ objekts }) => {
  const [menu, setMenu] = useState(false);

  const menuItems = [
    {
      title: "Hem",
      url: "/",
    },
    {
      title: "Meny",
      url: "/menu",
    },
    {
      title: "Om oss",
      url: "/about-us",
    },
    {
      title: "Kontakt",
      url: "/contact-us",
    },
  ];

  return (
    <>
      <div className="w-full h-[5.3rem] hidden md:flex items-center justify-evenly bg-blue28 p-1 relative">
        <ul className="w-full flex items-center justify-end lg:gap-14 md:gap-8">
          {menuItems.map((item, index) => (
            <li
              key={index + "navitems"}
              className={`min-w-max text-sm text-white`}
            >
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <div className="lg:w-full w-3/4 flex items-center justify-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="new-twins-pizzeri"
              className="w-32 h-32 translate-y-11"
            />
          </Link>
        </div>
        <div className="w-full flex items-center justify-start gap-4">
          <Button className="bg-transparent !border-white py-3 lg:max-w-[9rem] md:max-w-[8rem] min-w-max">
            <CiShoppingBasket className="mr-2 text-xl" /> {objekts} objekt
          </Button>

          <Button
            link="tel:040185050"
            className="py-3 min-w-max lg:max-w-[9rem] md:max-w-[8rem] !text-sm"
          >
            <FiPhoneCall className="mr-2 -mb-1 text-base" /> 040-18 50 50
          </Button>
        </div>
      </div>

      {/* ------------------- mobile menu --------------- */}

      <div className="w-full h-20 flex md:hidden items-center justify-evenly bg-blue28 p-2 px-4 relative z-40">
        <div className="w-full flex items-center justify-start">
          <Link href="/">
            <Image src={Logo} alt="new-twins-pizzeri" className="w-16 h-16" />
          </Link>
        </div>

        <button
          onClick={() => setMenu(!menu)}
          className={`text-2xl text-white flex items-center justify-center relative p-4`}
        >
          <IoClose
            className={`${
              menu ? "rotate-90" : "opacity-0 rotate-90"
            } absolute transition-all duration-200 ease-in-out`}
          />
          <FiMenu
            className={`${
              !menu ? "rotate-0" : "opacity-0 rotate-180"
            } absolute transition-all duration-200 ease-in-out`}
          />
        </button>

        <ul
          className={`w-full absolute flex items-center justify-center flex-col top-full lg:gap-14 md:gap-8 ${
            menu ? "max-h-screen" : "max-h-0"
          } overflow-hidden bg-blue3D transition-all duration-300 ease-in-out`}
        >
          {menuItems.map((item, index) => (
            <li
              onClick={() => setMenu(false)}
              key={index + "navitems"}
              className={`w-full flex items-center justify-start border-b border-gray-50 border-opacity-10`}
            >
              <Link 
                href={item.url} 
                className={`w-full flex items-center justify-start text-sm text-white p-4`}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li
            className={`w-full flex items-center justify-start text-sm text-white border-b border-gray-50 border-opacity-10 p-4`}
          >
            <CiShoppingBasket className="mr-2 text-xl" /> {objekts} objekt
          </li>
          <li
            className={`w-full flex items-center justify-start text-sm text-white border-b border-gray-50 border-opacity-10 p-4`}
          >
            <Button link="tel:040185050" className="py-3">
              <FiPhoneCall className="mr-2" /> 040-18 50 50
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

Navbar.defaultProps = {
  objekts: 0,
};
