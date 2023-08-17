"use client";

import { FC, useState } from "react";
import { SearchManufacturer } from "@/components";

const SearchBar: FC = () => {
  const [manufacturer, setManufacturer] = useState("");
  console.log(`Manufacturer state: ${manufacturer}`);

  const submitHandler = () => { };
  return (
    <form className="searchbar" onSubmit={submitHandler}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
