import React from "react";

type Props = {
  text: string | JSX.Element;
  action?: () =>  void;
  type: "submit" | "reset" | "button";
  disabled?: boolean;
  width?: string; // New prop for width
};

const Button = (props: Props) => {
  return (
    <>
      <button
        className={`disabled:bg-gray-500 text-[24px] bg-primary hover:bg-primary/80 duration-300 text-white px-2 rounded-lg py-2 font-bold disabled:cursor-not-allowed`}
        style={{ width: props.width || "100%" }} // Apply width dynamically
        onClick={props.action}
        type={props.type}
        disabled={props.disabled}
      >
        {props.text}
      </button>
    </>
  );
};

export default Button;
