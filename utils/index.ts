import { ICarProps, IFilterProps } from "@/types";

export async function fetchCars(filters: IFilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;
  const headers = {
    "X-RapidAPI-Key": "e6d5e311cemshbbad97598a44621p1721f4jsnee1d9ec91ffb",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers,
    },
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

//Api no longer available for personal projects
export const generateCarImageUrl = (car: ICarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  if (value === "any") {
    searchParams.delete(`${type}`);
  } else {
    searchParams.set(type, value);
  }

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const capitalizeFirstLetter = (string: string) => {
  if (string === "") return string;
  let word = string;
  const firstLetter = word.charAt(0).toUpperCase();
  const remainingLetters = word.slice(1);

  const result = firstLetter + remainingLetters;
  return result;
};
