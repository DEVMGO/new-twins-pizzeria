import React from "react";
import Link from "next/link";
import Image from "next/image";
// image
import Logo from "@/public/assets/images/text-logo.svg";
// icons
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import Email from "@/components/ui/icons/email";

const Footer = () => {
  const menuItems = [
    {
      title: "Hem",
      url: "",
    },
    {
      title: "Meny",
      url: "",
    },
    {
      title: "Om oss",
      url: "",
    },
    {
      title: "Kontakt",
      url: "",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center flex-col bg-blue28">
      <div className="w-full flex items-start justify-between md:flex-row flex-col md:px-4 p-4 px-8">
        <div className="w-full flex sm:items-center items-start justify-start flex-col my-8">
          <div className="flex items-start justify-start flex-col">
            <Image src={Logo} />
            <div className="min-w-max text-xs text-white mt-3 flex items-center justify-center">
              <p>© 2022</p> <h1>Twins Pizzeria</h1>
              <p>. Alla rättigheter förbehållna</p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-start justify-center my-8">
          <ul className={`w-full flex items-center justify-start md:flex-col flex-row`}>
            {menuItems.map((item, index) => (
              <li
                key={index + "navitems"}
                className={`w-full flex items-center justify-center text-sm text-white sm:p-4 p-2`}
              >
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex sm:items-center items-start justify-start flex-col my-8">
          <div className="flex items-start justify-start flex-col">
            <h5 className="text-sm font-bold text-white">Information</h5>
            <div className="flex items-center justify-start my-3">
              <IoLocationOutline className="mr-2 text-white text-lg" />
              <p className="text-sm text-white">Lundavägen 71A, 212 24 Malmö</p>
            </div>
            <div className="flex items-center justify-start my-3">
              <FiPhoneCall className="mr-2 text-white text-lg" />
              <p className="text-sm text-white">040-18 23 22 , 040-18 50 50</p>
            </div>
            <div className="flex items-center justify-start my-3">
              <Email className="mr-2 text-white text-lg" />
              <p className="text-sm text-white">Kontakt@twinspizzeria.se</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center p-4 border-t border-gray-50 border-opacity-20">
        <div className="text-sm text-white flex items-center justify-center">
          <p>© 2022</p> <h1>Twins divizzeria</h1>
          <p>. Alla rättigheter förbehållna</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
