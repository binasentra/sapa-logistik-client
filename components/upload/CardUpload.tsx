"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import style from "@/style/upload.module.css";
import { FaRegCircleXmark, FaUpload } from "react-icons/fa6";
import * as xlsx from "xlsx";
import { Button, Notification, Popover, Text } from "@mantine/core";
import { useUpload } from "@/context/uploadContext";
import { FaCloudUploadAlt } from "react-icons/fa";

export const CardUpload = () => {
  const { setDataUpload } = useUpload();
  const [isValid, setIsValid] = React.useState<boolean>(false);
  const [isSubmit, setIsSubmit] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const allowedExtensions = /(\.xls|\.xlsx)$/i;
    const maxSize = 10 * 1024 * 1024;

    if (acceptedFiles.length > 1) {
      setMessage("Hanya boleh mengupload satu file");
      setIsValid(true);
      return;
    }

    if (!allowedExtensions.exec(acceptedFiles[0].name)) {
      setMessage("File harus berupa excel");
      setIsValid(true);
      return;
    }

    if (acceptedFiles[0].size > maxSize) {
      setMessage("Ukuran file tidak boleh lebih dari 10MB");
      setIsValid(true);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: any) => {
      if (e.target) {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet);
        const tempKey = json[0] ? json[0] : {};
        const JSO9 = Object.keys(tempKey);
        setDataUpload(json);
        setIsSubmit(true);
        // console.log("========ini json==", json);
      }
    };
    acceptedFiles.forEach((file) => reader.readAsArrayBuffer(file));
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.name}>{file.name}</li>
  ));
  return (
    <section className="container">
      <h4 className="mb-3 font-bold">Upload File</h4>
      <div {...getRootProps({ className: style.dropzone })}>
        <input {...getInputProps()} />
        <FaUpload className="text-xl mb-3" />
        <p className="text-xs text-center">
          Tarik 'n' letakkan beberapa file di sini, atau klik untuk memilih file
        </p>
      </div>
      <aside>
        <ul>{!isValid && files}</ul>
      </aside>
      {isValid && (
        <Notification
          icon={<FaRegCircleXmark />}
          color="red"
          title="Terjadi Kesalahan"
          className="mt-3"
          onClose={() => setIsValid(false)}
        >
          {message}
        </Notification>
      )}
      {isSubmit && (
        <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
          <Popover.Target>
            <Button
              fullWidth
              className="mt-3"
              variant="filled"
              disabled={isValid}
              color="green"
              leftSection={<FaCloudUploadAlt />}
            >
              Upload
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="sm">Apakah anda yakin ingin mengupload file ini?</Text>
            <div className="flex justify-end">
              <Button
                variant="outline"
                color="gray"
                className="mr-3"
                onClick={() => {
                  setIsSubmit(false);
                  setDataUpload([]);
                }}
              >
                Batal
              </Button>
              <Button
                variant="filled"
                color="yellow"
                onClick={() => {
                  setIsSubmit(false);
                  setIsValid(false);
                }}
              >
                submit
              </Button>
            </div>
          </Popover.Dropdown>
        </Popover>
      )}
    </section>
  );
};
