import React from "react";
import Image from "next/image";
// components
import MenuHeaders from "@/components/menu/menuHeaders";
// icons
import ImgMenu from "@/public/assets/images/menu/menu.png";

const Menu = ({ foodList }) => {

    const groupedItems = foodList?.map((acc, item) => {
        const key = item.title;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(item);
        return acc;
      }, {});
      
      console.log(groupedItems)

  return (
    <div className="w-full flex items-center justify-start flex-col py-28 px-10">
      <h3 className="text-xl text-gray-500 font-semibold">VÅRA MATRÄTTER</h3>
      <div className="flex items-start justify-center my-8">
        <Image
          src={ImgMenu}
          alt="menu"
          className="w-11 h-11 mr-2 mt-2 md:block hidden"
        />
        <h4 className="md:text-5xl text-3xl text-blue28 font-bold">Meny</h4>
      </div>

      <MenuHeaders />

      <div className="w-full flex items-center justify-start flex-col">
        <div className="w-full flex items-center justify-between">
          {/* <h3>{item}</h3> */}
        </div>
      </div>
    </div>
  );
};

export default Menu;

Menu.defaultProps = {
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
      type: "special",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Grill",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "gril",
      type: "special",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Grill",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "gril",
      type: "special",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Grill",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "gril",
      type: "special",
      priceNormal: 180,
      priceFamily: 180,
    },
    {
      title: "Grill",
      name: "Gorgonzola",
      materials: "onions, mushrooms, pork fillet, gorgonzola",
      categry: "gril",
      type: "special",
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
