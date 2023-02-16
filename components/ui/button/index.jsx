import React from "react";
import Link from "next/link";

const Button = (props) => {
  if (props.link) {
    return (
      <Link
        href={props.link}
        className={`${props.className} w-full flex items-center justify-center p-2 bg-redED border border-redED hover:bg-opacity-90 transition-all duration-300 text-white text-xs rounded-md`}
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
      className={`${props.className} w-full flex items-center justify-center p-2 bg-redED border border-redED hover:bg-opacity-90 transition-all duration-300 text-white text-xs rounded-md`}
    >
      {props.children}
    </button>
  );
};

export default Button;
