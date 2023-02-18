import React from "react";
import Head from "next/head";
import Image from "next/image";
// images
import ImgCover from "@/public/assets/images/aboutus/cover.jpg";

const Om_Oss = () => {
  return (
    <>
      <Head>
        <title>Om Oss | Twins Pizzeria & Pub</title>
      </Head>
      <div className="w-full max-w-screen-2xl flex items-center justify-start flex-col lg:pt-24 pt-10 px-6">
        <h4 className="text-3xl text-blue28 font-bold">Om oss</h4>

        <div className="md:w-4/5 w-full flex items-center justify-start flex-col my-8">
          <div className="w-full md:h-[30rem] h-[15rem] rounded-lg overflow-hidden">
            <Image
              src={ImgCover}
              alt="twins-pizzeria"
              className="w-full h-full"
            />
          </div>

          <div className="md:w-2/3 w-full flex items-center justify-start flex-col my-10">
            <div className="w-full flex items-center justify-start flex-col">
              <p className="w-full text-justify md:text-base text-sm text-black mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <p className="w-full text-justify md:text-base text-sm text-black mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            <div className="w-full md:h-[30rem] h-[15rem] rounded-lg overflow-hidden">
              <Image
                src={ImgCover}
                alt="twins-pizzeria"
                className="w-full h-full"
              />
            </div>

            <div className="w-full flex items-center justify-start flex-col my-10">
              <p className="w-full text-justify md:text-base text-sm text-black mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <p className="w-full text-justify md:text-base text-sm text-black mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Om_Oss;

Om_Oss.layout = "L1";
