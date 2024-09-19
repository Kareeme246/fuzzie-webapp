"use client";
import React, { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { onDeleteFlow, onFlowPublish } from "../_actions/workflow-connections";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Props = {
  name: string;
  description: string;
  id: string;
  publish: boolean | null;
};

function Workflow(props: Props) {
  const [publishStatus, setpublishStatus] = useState(props.publish);
  const [isDeleted, setIsDeleted] = useState(false);

  async function onPublishFlow(event: any) {
    const response = await onFlowPublish(
      props.id,
      event.target.ariaChecked === "false",
    );
    if (response) {
      setpublishStatus(!publishStatus);
      toast.message(response);
    }
  }

  async function deleteWorkflow() {
    const response = await onDeleteFlow(props.id);
    if (response) {
      setIsDeleted(true);
      toast.message(response);
    }
  }

  if (isDeleted) return null;

  return (
    <Card className="flex w-full items-center justify-between bg-transparent">
      <CardHeader className="flex flex-col gap-2">
        <Link href={`/workflows/editor/${props.id}`}>
          <div className="flex flex-row gap-2">
            <Image
              src="/googleDrive.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/notion.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
            <Image
              src="/discord.png"
              alt="Google Drive"
              height={30}
              width={30}
              className="object-contain"
            />
          </div>
          <div className="">
            <CardTitle className="text-lg">{props.name}</CardTitle>
            <CardDescription>{props.description}</CardDescription>
          </div>
        </Link>
      </CardHeader>
      <div className="flex flex-col items-center gap-2 p-4">
        <Button size={"icon"} variant={"ghost"} onClick={deleteWorkflow}>
          <X />
        </Button>
        <Label htmlFor="airplane-mode" className="text-muted-foreground">
          {publishStatus! ? "On" : "Off"}
        </Label>
        <Switch
          id="airplane-mode"
          onClick={onPublishFlow}
          defaultChecked={publishStatus!}
        />
      </div>
    </Card>
  );
}

export default Workflow;
