"use client";
import { Pagination, Table } from "@mantine/core";
import React, { useEffect, useState } from "react";
import style from "@/style/upload.module.css";
import { useUpload } from "@/context/uploadContext";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

const TablePreview = () => {
  const { dataUpload } = useUpload();

  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    if (dataUpload && dataUpload.length > 0) {
      const keys = Object.keys(dataUpload[0]);
      setHeaders(keys);
      setRows(dataUpload);
    }
  }, [dataUpload]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedRows = rows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className={style.tableContainer}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              {headers.map((header) => (
                <Table.Th key={header}>{header}</Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.map((row, index) => (
              <Table.Tr key={index}>
                {headers.map((header) => (
                  <Table.Td key={header}>{row[header]}</Table.Td>
                ))}
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
      <div className="flex justify-between mt-5">
        <div>
          <Pagination
            total={Math.ceil(rows.length / itemsPerPage)}
            onChange={handlePageChange}
            value={currentPage}
          />
        </div>
        <div>
          <p>Total {rows.length} Data</p>
        </div>
      </div>
    </>
  );
};

export default TablePreview;
