import React from "react";
// images
import Img1 from "@/public/assets/images/home/lunch1.jpg";
import Img2 from "@/public/assets/images/home/lunch2.jpg";
import Img3 from "@/public/assets/images/home/lunch3.jpg";
import Image from "next/image";

const Luncherbjudanden = () => {
  const sugestedItems = [
    {
      title: "Italian Pizza",
      kr: 180,
      image: Img1,
    },
    {
      title: "Burger",
      kr: 180,
      image: Img2,
    },
    {
      title: "Chicken wings",
      kr: 180,
      image: Img3,
    },
  ];
  return (
    <div className="w-full min-h-max sm:p-8 p-4 flex items-center justify-center flex-col">
      <div className="sm:w-4/5 w-full max-w-7xl flex items-center justify-center flex-col">
        <h4 className="text-sm text-gray70 my-4">Luncherbjudanden</h4>
        <h3 className="md:text-3xl text-lg text-blue28 font-bold">
          Rekommenderade måltider till lunch
        </h3>

        <div className="w-full grid grid-cols-21 gap-8 my-8 items-center justify-center">
          {sugestedItems.map((item, index) => (
            <div
              key={index + "luncher"}
              className="w-full flex items-center justify-center flex-col"
            >
              <div className="w-full max-w-sm flex items-center justify-center flex-col">
                <div className="w-full sm:h-80 h-72 overflow-hidden rounded-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-xl text-blue28 font-bold my-4">{item.title}</h2>
                <h5 className="text-sm text-gray70 font-medium">
                  {item.kr} kr
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Luncherbjudanden;
