import React from "react";
import Link from "next/link";

const Button = (props) => {
  if (props.link) {
    return (
      <Link
        href={props.link}
        className={`${props.className} w-full flex items-center justify-center p-2 bg-redED border border-redED hover:bg-gray-100 hover:text-redED transition-all duration-500 font-medium text-white text-sm rounded-md`}
      >
          {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled ? props.disabled : false}
      className={`${props.className} w-full flex items-center justify-center p-2 bg-redED border border-redED hover:bg-gray-100 hover:text-redED transition-all duration-500 font-medium text-white text-sm rounded-md`}
    >
      {props.children}
    </button>
  );
};

export default Button;
