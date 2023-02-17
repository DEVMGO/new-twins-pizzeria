import React from "react";
// icons
import EmailIcon from "../ui/icons/email";
import LocationIcon from "../ui/icons/location";
import PhoneIcon from "../ui/icons/phone";

const Contacts = (props) => {
  return (
    <div className="w-full flex items-center justify-between lg:flex-row flex-col gap-10">
      <div className="w-full flex items-start lg:justify-start sm:justify-center min-w-max">
        <EmailIcon className="[&>path]:fill-[#8F90A6]" />{" "}
        <p className="text-sm text-blue28 ml-2">{props.email}</p>
      </div>

      <div className="w-full flex items-start lg:justify-start sm:justify-center min-w-max">
        <PhoneIcon className="[&>path]:fill-[#8F90A6]" />{" "}
        <p className="text-sm text-blue28 ml-2">{props.phone}</p>
      </div>

      <div className="w-full flex items-start lg:justify-start sm:justify-center min-w-max">
        <LocationIcon className="[&>path]:fill-[#8F90A6]" />{" "}
        <p className="text-sm text-blue28 ml-2">{props.location}</p>
      </div>
      <div className="w-full lg:block hidden"></div>
    </div>
  );
};

export default Contacts;
