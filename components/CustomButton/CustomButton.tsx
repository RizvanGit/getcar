"use client";
import { FC } from "react";
import Image from "next/image";
import { ICustomButtonProps } from "@/types";

const CustomButton: FC<ICustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  titleStyles,
  btnType,
  isDisabled,
  rightIcon,
}) => {
  return (
    <button
      type={btnType || "button"}
      disabled={isDisabled}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${titleStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
