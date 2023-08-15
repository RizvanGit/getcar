import { MouseEventHandler } from "react";

export interface ICustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "reset" | "submit" | undefined;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  titleStyles?: string;
}

export interface ICustomFilterProps {
  title?: string;
}

export interface ISearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
