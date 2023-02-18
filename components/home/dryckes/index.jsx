import React from "react";
import Image from "next/image";
import Img from "@/public/assets/images/home/dryckes.jpg";
import Button from "@/components/ui/button";

const Dryckes = () => {
  return (
    <div className="w-full max-w-screen-2xl flex items-center justify-center flex-col">
      <div className="md:w-4/5 w-full flex items-center lg:justify-start justify-center lg:flex-row flex-col sm:p-8 p-4">
        <div className="sm:w-[28rem] w-full md:h-80 h-48 rounded-md overflow-hidden lg:mr-10">
          <Image src={Img} alt="dryckes" className="w-full h-full object-cover" />
        </div>

        <div className="min-w-max sm:w-auto w-full flex items-start justify-center flex-col sm:p-6 lg:ml-10 lg:mt-0 mt-5">
          <h3 className="md:text-3xl text-2xl text-blue28 font-bold my-3">Happy hour</h3>
          <div className="text-base text-blue28 font-medium">17:00-19:00 <span className="text-base text-gray70">mellan</span> Måndag-Fredag</div>
          <div className="flex items-end text-base text-gray70 [&>span]:text-blue28 [&>span]:ml-2 [&>span]:font-medium">
            <h2 className="text-gray70 mr-1">Pizzas</h2> number 1-15 <span>50kr</span>
          </div>
          <div className="flex items-end text-base text-gray70 [&>span]:text-blue28 [&>span]:ml-2 [&>span]:font-medium">
            <h3 className="text-gray70 mr-1">Beer</h3> 50cl <span>40kr</span>
          </div>

          <Button link="#" className="!w-32 !text-xs py-3 !bg-blue28 !border-white my-3">Se dryckesmeny</Button>
        </div>
      </div>
    </div>
  );
};

export default Dryckes;
