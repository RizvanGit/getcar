"use client";

import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { About, CustomButton } from "..";

const Navbar: FC = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  return (
    <div className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="logo.svg"
            alt="GetCar logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="About"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          titleStyles="font-semibold text-blue-600"
          handleClick={() => setIsAboutOpen(true)}
        />
        <About isOpen={isAboutOpen} closeAbout={() => setIsAboutOpen(false)} />
      </nav>
    </div>
  );
};

export default Navbar;
