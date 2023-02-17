import React from "react";
import Image from "next/image";
// icons
import ImgPizzor from "@/public/assets/images/menu/pizzor.png";
import ImgGril from "@/public/assets/images/menu/gril.png";
import ImgSallad from "@/public/assets/images/menu/sallader.png";
import ImgDryck from "@/public/assets/images/menu/dryck.png";
import ImgAlkohol from "@/public/assets/images/menu/alkohol.png";
// style
import style from './style.module.css';

const MenuHeaders = ({ select, setSelect, filter, setFilter }) => {
  // const lists = {'pizza':[{title: 'ss', type: 'pizza'},{title: 'ss', type: 'pizza2'}], 'gril': [{title: 'ss', type: 'gril'}], 'salad': [{title: 'bb', type: 'gril'}]};

  const items = [
    {
      categry: "Special Pizzas",
      title: "Pizzor",
      icon: ImgPizzor,
    },
    {
      categry: "Grill",
      title: "Grill",
      icon: ImgGril,
    },
    {
      categry: "Sallader",
      title: "Sallader",
      icon: ImgSallad,
    },
    {
      categry: "Dryck",
      title: "Dryck",
      icon: ImgDryck,
    },
    {
      categry: "Alkoholdryck",
      title: "Alkoholdryck",
      icon: ImgAlkohol,
    },
  ];

  return (
    <div className="w-full flex items-center justify-center flex-col my-4">
      <ul id={style.headerMenu} className="w-full flex items-center justify-between md:py-6 py-3 overflow-auto min-w-full">
        {items.map((item, index) => (
          <li key={index + "items"} className="min-w-max">
            <div
              onClick={() => setSelect(item.categry)}
              className="flex items-center justify-center cursor-pointer mr-8 hover:[&>h2]:text-redED"
            >
              <Image
                src={item.icon}
                alt={item.title}
                className="w-11 md:h-11 h-0 mr-2 object-contain md:block hidden"
              />
              <h2
                className={`text-lg transition-all duration-200 ${
                  select === item.categry ? "text-redED" : "text-blue28"
                } font-semibold`}
              >
                {item.title}
              </h2>
            </div>
          </li>
        ))}
      </ul>

      <hr className="w-full border-gray-400" />

      <div id={style.filtermenu} className="w-full flex items-center justify-start md:py-6 py-3 gap-6 overflow-auto min-w-full">
        <button
          onClick={() => {
            setFilter("")
            setSelect("")
          }}
          className={`w-full max-w-[118px] md:min-w-[118px] min-w-[83px] h-12 border border-blue28 ${
            filter === "" && select === "" ? "text-white bg-blue28" : "text-blue28 bg-white"
          } md:text-base text-sm font-medium rounded-xl hover:bg-blue28 hover:text-white transition-all duration-300`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("vegetarian")}
          className={`w-full max-w-[118px] md:min-w-[118px] min-w-[83px] h-12 border border-blue28 ${
            filter === "vegetarian"
              ? "text-white bg-blue28"
              : "text-blue28 bg-white"
          } md:text-base text-sm font-medium rounded-xl hover:bg-blue28 hover:text-white transition-all duration-300`}
        >
          Vegetarian
        </button>
        <button
          onClick={() => setFilter("havet")}
          className={`w-full max-w-[118px] md:min-w-[118px] min-w-[83px] h-12 border border-blue28 ${
            filter === "havet" ? "text-white bg-blue28" : "text-blue28 bg-white"
          } md:text-base text-sm font-medium rounded-xl hover:bg-blue28 hover:text-white transition-all duration-300`}
        >
          Havet
        </button>
        <button
          onClick={() => setFilter("special")}
          className={`w-full max-w-[118px] md:min-w-[118px] min-w-[83px] h-12 border border-blue28 ${
            filter === "special"
              ? "text-white bg-blue28"
              : "text-blue28 bg-white"
          } md:text-base text-sm font-medium rounded-xl hover:bg-blue28 hover:text-white transition-all duration-300`}
        >
          Special
        </button>
        <button
          onClick={() => setFilter("grill")}
          className={`w-full max-w-[118px] md:min-w-[118px] min-w-[83px] h-12 border border-blue28 ${
            filter === "grill" ? "text-white bg-blue28" : "text-blue28 bg-white"
          } md:text-base text-sm font-medium rounded-xl hover:bg-blue28 hover:text-white transition-all duration-300`}
        >
          Grill
        </button>
        <button
          onClick={() => setFilter("annat")}
          className={`w-full max-w-[118px] md:min-w-[118px] min-w-[83px] h-12 border border-blue28 ${
            filter === "annat" ? "text-white bg-blue28" : "text-blue28 bg-white"
          } md:text-base text-sm font-medium rounded-xl hover:bg-blue28 hover:text-white transition-all duration-300`}
        >
          Annat
        </button>
      </div>
    </div>
  );
};

export default MenuHeaders;
