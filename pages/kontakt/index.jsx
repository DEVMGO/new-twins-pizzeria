import React from "react";
import Head from "next/head";
import Image from "next/image";
// components
import Contacts from "@/components/kontakt/contacts";
import ContactUsForm from "@/components/kontakt/contactUsForm";
// images
import ImgCover from "@/public/assets/images/aboutus/cover.jpg";

const Kontakt = () => {
  let email = 'Kontakt@twinspizzeria.se';
  let phone = '040-18 23 22 , 040-18 50 50';
  let location = 'Lundavägen 71A, 212 24 Malmö';

  return (
    <>
      <Head>
        <title>Kontakt | Twins Pizzeria & Pub</title>
      </Head>
      <div className="w-full max-w-screen-2xl flex items-center justify-start flex-col md:py-24 py-10 px-6">
        <h4 className="text-3xl text-blue28 font-bold">Kontakt</h4>

        <div className="lg:w-4/5 w-full flex items-center justify-start flex-col my-8">
          <div className="w-full flex lg:items-start items-center lg:justify-between justify-center lg:flex-row flex-col mb-16">
            <div className="lg:w-2/5 w-full flex items-center justify-center">
              <div className="w-full max-w-md md:h-80 h-72 rounded-lg overflow-hidden">
                <Image src={ImgCover} alt="twins-pizzeria" className="w-full h-full" />
              </div>
            </div>

            <div className="lg:w-3/5 w-full lg:mt-0 mt-6 flex items-center justify-center">
              <ContactUsForm />
            </div>
          </div>

          <Contacts email={email} phone={phone} location={location} />
        </div>
      </div>
    </>
  );
};

export default Kontakt;

Kontakt.layout = "L1";
