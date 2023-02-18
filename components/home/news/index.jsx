import React from "react";
import Image from "next/image";
import Img from "@/public/assets/images/home/dryckes.jpg";

const News = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col bg-grayFC py-16">
      <div className="md:w-4/5 max-w-screen-2xl w-full flex items-center lg:justify-between justify-center lg:flex-row flex-col sm:p-8 p-4">
        <div className="sm:w-auto w-full flex items-start justify-center flex-col sm:p-6 lg:ml-10 lg:mt-0 mt-5 lg:order-1 order-2">
          <h3 className="md:text-3xl text-2xl text-blue28 font-bold my-3">Nu har vi pub!</h3>
          <p className="max-w-[28rem] text-sm text-blue28 text-justify">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p>
        </div>

        <div className="sm:w-[28rem] sm:min-w-[24rem] w-full md:h-80 h-48 rounded-md overflow-hidden lg:mr-10 lg:order-2 order-1">
          <Image
            src={Img}
            alt="dryckes"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
