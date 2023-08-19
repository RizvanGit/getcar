"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

import { IShowMoreProps } from "@/types";
import { CustomButton } from "@/components";
import { updateSearchParams } from "@/utils";

const ShowMore: FC<IShowMoreProps> = ({ pageNumber, isNext }) => {
  const router = useRouter();

  const navigationHandler = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", String(newLimit));
    router.push(newPathName, { scroll: false });
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show more"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={navigationHandler}
        />
      )}
    </div>
  );
};

export default ShowMore;
