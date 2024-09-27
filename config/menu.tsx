import React from "react";
import { FaCodepen, FaFileContract, FaFileUpload } from "react-icons/fa";

export type IMENU = {
  key: number;
  path: string;
  title: string;
  icon?: React.ReactNode;
};

export const menuLogistik: IMENU[] = [
  {
    key: 1,
    path: "/monitoring",
    title: "Monitoring",
    icon: <FaCodepen />,
  },
  {
    key: 2,
    path: "/upload",
    title: "Upload",
    icon: <FaFileUpload />,
  },
  {
    key: 3,
    path: "/inquiry",
    title: "Inquiry",
    icon: <FaFileContract />,
  },
];

export const GetMenu = (flag?: string): IMENU[] => {
  if (flag === "logistik") {
    return menuLogistik;
  }
  return menuLogistik;
};
