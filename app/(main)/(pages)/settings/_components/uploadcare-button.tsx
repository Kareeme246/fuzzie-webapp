"use client"; // is needed only if you’re using React Server Components
import { FileUploaderRegular } from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useState } from "react";

type Props = {
  onUpload: any;
};

function UploadCareButton(props: Props) {
  // TODO WIRE UP NEW UPLOADCARE API
  // https://uploadcare.com/blog/file-uploading-in-nextjs/
  return (
    <div>
      <FileUploaderRegular
        onChange={() => {}}
        sourceList="local, camera, dropbox"
        pubkey="16b97b87b0faa983b4f0"
      />
    </div>
  );
}

export default UploadCareButton;
