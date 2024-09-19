"use client"; // For now until things hopefully fix later
import React from "react";
import UploadCareButton from "./uploadcare-button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Props = {
  userImage: string | null;
  onDelete: Function;
  onUpload: Function;
};

function ProfilePicture(props: Props) {
  const router = useRouter();
  async function onRemoveProfileImage() {
    const response = await props.onDelete();
    if (response) {
      router.refresh;
    }
  }
  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="flex h-[5vh] flex-col justify-center">
        {props.userImage ? (
          <>
            <div className="relative h-full w-2/12">
              <Image src={props.userImage} alt="User_Image" fill />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Image
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={props.onUpload} />
        )}
      </div>
    </div>
  );
}

export default ProfilePicture;
