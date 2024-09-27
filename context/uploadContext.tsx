"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface UploadContextType {
  dataUpload: any[];
  setDataUpload: React.Dispatch<React.SetStateAction<any[]>>;
}

const UploadContext = createContext<UploadContextType | undefined>(undefined);

export default function UploadProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dataUpload, setDataUpload] = useState<any[]>([]);

  return (
    <UploadContext.Provider
      value={{
        dataUpload,
        setDataUpload,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
}

export function useUpload() {
  const context = useContext(UploadContext);

  if (context === undefined)
    throw new Error("useUpload must be used within a LoginProvider");

  return context;
}
