"use client";

import { FC, useState } from "react";
import { SearchManufacturer } from "@/components";

const SearchBar: FC = () => {
  const [manufacturer, setManufacturer] = useState("");

  const submitHandler = () => { };
  return (
    <form className="searchbar" onSubmit={submitHandler}>
      <div className="searchbar__item">
        <SearchManufacturer />
      </div>
    </form>
  );
};

export default SearchBar;
