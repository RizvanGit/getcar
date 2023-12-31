import { MouseEventHandler } from "react";

export interface ICustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "reset" | "submit" | undefined;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  titleStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface IOptionProps {
  title: string;
  value: string;
}
export interface ICustomFilterProps {
  title: string;
  options: IOptionProps[];
}

export interface ISearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface ICarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface ICarDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  car: ICarProps;
}

export interface IFilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export type SearchParams = {
  searchParams: Partial<IFilterProps>;
};

export interface IShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface IAboutProps {
  isOpen: boolean;
  closeAbout: () => void;
}
