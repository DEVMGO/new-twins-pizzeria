import React, { useState } from "react";
import Image from "next/image";
// icons
import ImgPizzor from "@/public/assets/images/menu/pizzor.png";
import ImgGril from "@/public/assets/images/menu/gril.png";
import ImgSallad from "@/public/assets/images/menu/sallader.png";
import ImgDryck from "@/public/assets/images/menu/dryck.png";
import ImgAlkohol from "@/public/assets/images/menu/alkohol.png";

const MenuHeaders = () => {
  const [select, setSelect] = useState(null);
  const [filter, setFilter] = useState('all');

  const items = [
    {
      title: "Pizzor",
      icon: ImgPizzor,
    },
    {
      title: "Grill",
      icon: ImgGril,
    },
    {
      title: "Sallader",
      icon: ImgSallad,
    },
    {
      title: "Dryck",
      icon: ImgDryck,
    },
    {
      title: "Alkoholdryck",
      icon: ImgAlkohol,
    },
  ];

  return (
    <div className="w-full flex items-center justify-center flex-col my-4">
      <ul className="w-full flex items-center justify-between py-6">
        {items.map((item, index) => (
          <li key={index + "items"}>
            <div
              onClick={() => setSelect(index)}
              className="flex items-center justify-center cursor-pointer"
            >
              <Image
                src={item.icon}
                alt={item.title}
                className="w-11 h-11 mr-2 object-contain"
              />
              <h2
                className={`text-lg ${
                  select === index ? "text-redED" : "text-blue28"
                } font-semibold`}
              >
                {item.title}
              </h2>
            </div>
          </li>
        ))}
      </ul>

      <hr className="w-full border-gray-400" />

      <div className="w-full flex items-center justify-start py-6 gap-6">
        <button
          onClick={() => setFilter("all")}
          className={`w-full max-w-[115px] h-12 border border-blue28 ${
            filter === "all" ? "text-white bg-blue28" : "text-blue28 bg-white"
          } text-base font-medium rounded-xl hover:bg-blue28 hover:text-white transition-all duration-300`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("vegetarian")}
          className={`w-full max-w-[115px] h-12 border border-blue28 ${
            filter === "vegetarian"
              ? "text-white bg-blue28"
              : "text-blue28 bg-white"
          } text-base font-medium rounded-xl hover:bg-blue28 hover:text-white transition-all duration-300`}
        >
          Vegetarian
        </button>
        <button
          onClick={() => setFilter("havet")}
          className={`w-full max-w-[115px] h-12 border border-blue28 ${
            filter === "havet" ? "text-white bg-blue28" : "text-blue28 bg-white"
          } text-base font-medium rounded-xl hover:bg-blue28 hover:text-white transition-all duration-300`}
        >
          Havet
        </button>
        <button
          onClick={() => setFilter("special")}
          className={`w-full max-w-[115px] h-12 border border-blue28 ${
            filter === "special"
              ? "text-white bg-blue28"
              : "text-blue28 bg-white"
          } text-base font-medium rounded-xl hover:bg-blue28 hover:text-white transition-all duration-300`}
        >
          Special
        </button>
        <button
          onClick={() => setFilter("grill")}
          className={`w-full max-w-[115px] h-12 border border-blue28 ${
            filter === "grill" ? "text-white bg-blue28" : "text-blue28 bg-white"
          } text-base font-medium rounded-xl hover:bg-blue28 hover:text-white transition-all duration-300`}
        >
          Grill
        </button>
        <button
          onClick={() => setFilter("annat")}
          className={`w-full max-w-[115px] h-12 border border-blue28 ${
            filter === "annat" ? "text-white bg-blue28" : "text-blue28 bg-white"
          } text-base font-medium rounded-xl hover:bg-blue28 hover:text-white transition-all duration-300`}
        >
          Annat
        </button>
      </div>
    </div>
  );
};

export default MenuHeaders;
