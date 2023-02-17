import React, { useState } from "react";
import Image from "next/image";
// components
import MenuHeaders from "@/components/menu/menuHeaders";
// icons
import ImgMenu from "@/public/assets/images/menu/menu.png";

const Menu = ({ foodList, categorys }) => {
  const [select, setSelect] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <div className="w-full flex items-center justify-start flex-col py-28 md:px-20 px-6">
      <h3 className="text-xl text-gray-500 font-semibold">VÅRA MATRÄTTER</h3>
      <div className="flex items-start justify-center my-8">
        <Image
          src={ImgMenu}
          alt="menu"
          className="w-11 h-11 mr-2 mt-2 md:block hidden"
        />
        <h4 className="md:text-5xl text-3xl text-blue28 font-bold">Meny</h4>
      </div>

      <MenuHeaders
        select={select}
        setSelect={setSelect}
        filter={filter}
        setFilter={setFilter}
      />

      <div className="w-full flex items-center justify-start flex-col">
        {categorys?.filter((itm) => {
            if (select == "") {
              return itm;
            } else if (itm.title.toLowerCase().includes(select.toLowerCase())) {
              return itm;
            }
          })
          .map((item, i) => {
            return (
              <>
                <div
                  key={i}
                  className="w-full flex items-center justify-between mt-16"
                >
                  <h3 className="md:text-4xl text-lg text-blue28 font-bold">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-center gap-8">
                    <h5 className="md:text-base text-sm text-gray70 font-medium">
                      Normal
                    </h5>
                    <h5 className="md:text-base text-sm text-gray70 font-medium">
                      Famiy
                    </h5>
                  </div>
                </div>
                {foodList
                  ?.filter((itm) => {
                    if (filter == "") {
                      return itm;
                    } else if (
                      itm.type.toLowerCase().includes(filter.toLowerCase())
                    ) {
                      return itm;
                    }
                  })
                  .map((items, index) => {
                    if (items.title === item.title) {
                      return (
                        <div
                          key={index + "foods"}
                          className="w-full flex items-center justify-between my-4 border-b border-gray-300"
                        >
                          <div className="flex sm:max-w-5xl max-w-[200px] items-center justify-start gap-4 py-2">
                            <p className="text-base text-blue28">{index + 1}</p>
                            <div className="flex items-start justify-center flex-col">
                              <h2 className="md:text-lg text-base text-blue28 font-semibold">
                                {items.name}
                              </h2>
                              <p className="md:text-base text-sm text-gray70 font-medium">
                                {items.materials}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-center gap-8">
                            <h5 className="md:text-lg text-base text-blue28 font-medium">
                              {items.priceNormal} kr
                            </h5>
                            <h5 className="md:text-lg text-base text-blue28 font-medium">
                              {items.priceFamily} kr
                            </h5>
                          </div>
                        </div>
                      );
                    }
                  })}
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Menu;

Menu.defaultProps = {
  categorys: [
    {
        title: 'Special Pizzas',
        type: 'special'
    },
    {
        title: 'Grill',
        type: 'grill'
    },
    {
        title: 'Sallader',
        type: 'vegetarian'
    },
    {
        title: 'Dryck',
        type: 'annat'
    },
    {
        title: 'Alkoholdryck',
        type: 'annat'
    },
  ],
  foodList: [
    {
      title: "Special Pizzas",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "pizzas",
      type: "special",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Special Pizzas",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "pizzas",
      type: "special",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Special Pizzas",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "pizzas",
      type: "special",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Special Pizzas",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "pizzas",
      type: "special",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Special Pizzas",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "pizzas",
      type: "special",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Special Pizzas",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "pizzas",
      type: "special",
      priceNormal: 180,
      priceFamily: 180,
    },
    // ----------------- gril -----------

    {
      title: "Grill",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "gril",
      type: "special grill",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Grill",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "gril",
      type: "special grill",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Grill",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "gril",
      type: "special grill",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Grill",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "gril",
      type: "special grill",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Grill",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "gril",
      type: "special grill",
      priceNormal: 180,
      priceFamily: 180,
    },
    // --------------- Sallader  --------------------

    {
      title: "Sallader",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "sallader",
      type: "vegetarian",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Sallader",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "sallader",
      type: "vegetarian",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Sallader",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "sallader",
      type: "vegetarian",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Sallader",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "sallader",
      type: "vegetarian",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Sallader",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "sallader",
      type: "vegetarian",
      priceNormal: 180,
      priceFamily: 180,
    },
    // ------------------------ Dryck  ---------------------------
    {
      title: "Dryck",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "dryck",
      type: "annat",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Dryck",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "dryck",
      type: "annat",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Dryck",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "dryck",
      type: "annat",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Dryck",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "dryck",
      type: "annat",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Dryck",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "dryck",
      type: "annat",
      priceNormal: 180,
      priceFamily: 180,
    },
    // ------------------------- Alkoholdryck -------------------
    {
      title: "Alkoholdryck",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "dryck",
      type: "annat",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Alkoholdryck",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "dryck",
      type: "annat",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Alkoholdryck",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "dryck",
      type: "annat",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Alkoholdryck",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "dryck",
      type: "annat",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Alkoholdryck",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "dryck",
      type: "annat",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Alkoholdryck",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "dryck",
      type: "annat",
      priceNormal: 180,
      priceFamily: 180,
    },
  ],
};

Menu.layout = "L1";
