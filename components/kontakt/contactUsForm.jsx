import React, { useState } from "react";
import { toast } from "react-toastify";
import Button from "../ui/button";

const ContactUsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastNAme, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    if(firstName !== "") {
      e.preventDefault();
      setFirstName("")
      setLastName("")
      setPhone("")
      setEmail("")
      setDescription("")
      toast.success("Din information har skickats framgångsrikt");
    } else {
      e.preventDefault();
      toast.warn("complete form")
    }
  }
  return (
    <form onSubmit={handleSubmit} className="w-full lg:max-w-6xl max-w-md lg:px-8 px-0">
      <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-4 mb-4">
        <input
          type="text"
          placeholder="Förnamn"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full h-12 p-2 border border-grayD9 rounded outline-none"
        />
        <input
          type="text"
          placeholder="Efternamn"
          value={lastNAme}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full h-12 p-2 border border-grayD9 rounded outline-none"
        />
        <input
          type="tel"
          placeholder="Telefonnummer"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full h-12 p-2 border border-grayD9 rounded outline-none"
        />
        <input
          type="email"
          placeholder="E-post"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-12 p-2 border border-grayD9 rounded outline-none"
        />
      </div>
      <textarea
        placeholder="Ditt meddelande"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full h-32 min-h-[128px] max-h-[128px] p-2 border border-grayD9 rounded outline-none"
      />

      <Button type="submit" className="md:max-w-[80px] h-12 mt-4">Skicka</Button>
    </form>
  );
};

export default ContactUsForm;
