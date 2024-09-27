"use client";
import { Input } from "@mantine/core";
import React from "react";
import { FaSearch } from "react-icons/fa";

const FilterOption = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 md:gap-4">
      <div className="col-span-2">
        <Input
          placeholder="search"
          size="md"
          leftSection={<FaSearch size={16} />}
        />
      </div>
      {/* <div>01</div>
      <div>01</div> */}
    </div>
  );
};

export default FilterOption;
