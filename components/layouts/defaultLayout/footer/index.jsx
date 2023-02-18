import React from "react";
import Link from "next/link";
import Image from "next/image";
// image
import Logo from "@/public/assets/images/text-logo.svg";
// icons
import EmailIcon from "@/components/ui/icons/email";
import PhoneIcon from "@/components/ui/icons/phone";
import LocationIcon from "@/components/ui/icons/location";

const Footer = () => {
  const menuItems = [
    {
      title: "Hem",
      url: "/",
    },
    {
      title: "Meny",
      url: "/meny",
    },
    {
      title: "Om oss",
      url: "/om-oss",
    },
    {
      title: "Kontakt",
      url: "/kontakt",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center flex-col bg-blue28">
      <div className="w-full flex items-start justify-between md:flex-row flex-col md:px-4 p-4 px-8">
        <div className="w-full flex sm:items-center items-start justify-start flex-col my-8">
          <div className="flex items-start justify-start flex-col">
            <Image src={Logo} alt="twins pizzeria" />
            <div className="min-w-max text-xs text-white mt-3 flex items-center justify-center">
              <p>© 2022</p> <h1>Twins Pizzeria</h1>
              <p>. Alla rättigheter förbehållna</p>
            </div>
          </div>
        </div>

        <div className="w-full flex items-start justify-center my-8">
          <ul className={`flex items-start justify-start md:flex-col flex-row`}>
            {menuItems.map((item, index) => (
              <li
                key={index + "navitems"}
                className={`flex items-center justify-center text-sm text-white sm:p-4 p-2`}
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
              <LocationIcon className="mr-2 text-white text-lg" />
              <p className="text-sm text-white">Lundavägen 71A, 212 24 Malmö</p>
            </div>
            <div className="flex items-center justify-start my-3">
              <PhoneIcon className="mr-2 text-white text-lg" />
              <p className="text-sm text-white">040-18 23 22 , 040-18 50 50</p>
            </div>
            <div className="flex items-center justify-start my-3">
              <EmailIcon className="mr-2 text-white text-lg" />
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
