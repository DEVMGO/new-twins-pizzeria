import React from "react";
import Button from "../ui/button";

const ContactUsForm = () => {
  return (
    <form className="w-full lg:max-w-6xl max-w-md lg:px-8 px-0">
      <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          placeholder="Förnamn"
          className="w-full h-12 p-2 border border-grayD9 rounded outline-none"
        />
        <input
          type="text"
          placeholder="Efternamn"
          className="w-full h-12 p-2 border border-grayD9 rounded outline-none"
        />
        <input
          type="tel"
          placeholder="Telefonnummer"
          className="w-full h-12 p-2 border border-grayD9 rounded outline-none"
        />
        <input
          type="email"
          placeholder="E-post"
          className="w-full h-12 p-2 border border-grayD9 rounded outline-none"
        />
      </div>
      <textarea
        placeholder="Ditt meddelande"
        className="w-full h-32 min-h-[128px] max-h-[128px] p-2 border border-grayD9 rounded outline-none"
      />

      <Button type="submit" className="md:max-w-[80px] h-12 mt-4">Skicka</Button>
    </form>
  );
};

export default ContactUsForm;
