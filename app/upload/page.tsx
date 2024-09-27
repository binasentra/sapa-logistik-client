import Breadcrumbs from "@/components/material/Breadcrumbs";
import { CardUpload } from "@/components/upload/CardUpload";
import { DownloadButton } from "@/components/upload/DownloadButton";
import TablePreview from "@/components/upload/TablePreview";
import { Card } from "@mantine/core";
import React from "react";

export default function page() {
  return (
    <main>
      <Breadcrumbs title="Form Upload File" />
      <div className="grid grid-cols-1 md:grid-cols-3  pt-5">
        <div>
          <div className="mb-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h4 className="mb-3 font-bold">Download Format Excel</h4>
            <DownloadButton />
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <CardUpload />
          </div>
        </div>
        <div className="md:col-span-2 mt-4 md:mt-0">
          <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h4 className="mb-3 font-bold">Preview Data</h4>
            <TablePreview />
          </div>
        </div>
      </div>
    </main>
  );
}
