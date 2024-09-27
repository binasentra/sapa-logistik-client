import FilterOption from "@/components/inquiry/FilterOption";
import TableInquiry from "@/components/inquiry/TableData";
import Breadcrumbs from "@/components/material/Breadcrumbs";
import React from "react";

export default function page() {
  return (
    <main className="grid grid-cols-1 pt-5">
      <div className="mb-10">
        <Breadcrumbs title="Inquiry" />
      </div>
      <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <FilterOption />

        <div className="mt-10">
          <TableInquiry />
        </div>
      </div>
    </main>
  );
}
