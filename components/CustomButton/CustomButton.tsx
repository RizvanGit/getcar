"use client";
import { FC } from "react";
import { ICustomButtonProps } from "@/types";

const CustomButton: FC<ICustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  titleStyles,
  btnType,
}) => {
  return (
    <button
      type={btnType || "button"}
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${titleStyles}`}>{title}</span>
    </button>
  );
};

export default CustomButton;
