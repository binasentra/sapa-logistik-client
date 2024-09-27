import { Button } from "@mantine/core";
import React from "react";
import { FaDownload } from "react-icons/fa6";

export const DownloadButton = () => {
  return (
    <Button rightSection={<FaDownload size={14} />} fullWidth>
      Download
    </Button>
  );
};
