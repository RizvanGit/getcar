"use client";

import { FC, Fragment, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";

import { ICustomFilterProps } from "@/types";
import { capitalizeFirstLetter, updateSearchParams } from "@/utils";

const CustomFilter: FC<ICustomFilterProps> = ({ title, options }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  let optionParam: string | null;
  if (title === "fuel") {
    const paramValue = searchParams.get("fuel");
    optionParam = capitalizeFirstLetter(paramValue ? paramValue : "");
  } else {
    const paramValue = searchParams.get("year");
    optionParam = capitalizeFirstLetter(paramValue ? paramValue : "");
  }
  const initState = {
    title: optionParam ? optionParam : options[0].title,
    value: optionParam ? optionParam : options[0].value,
  };

  const [selected, setSelected] = useState(initState);
  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());
    router.push(newPathName, { scroll: false });
  };
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdateParams(e);
        }}
      >
        <div className="relative w-fit z-20">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron up down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => {
                return (
                  <Listbox.Option
                    key={option.title}
                    value={option}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                  >
                    <span
                      className={`block truncate"
                        }`}
                    >
                      {option.title}
                    </span>
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
