"use client";
import Workflowform from "@/components/forms/workflow-form";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import { useBilling } from "@/providers/billing-provider";
import { useModal } from "@/providers/modal-provider";
import { Plus } from "lucide-react";
import React from "react";

type Props = {};

function WorkflowButton({}: Props) {
  const { setOpen, setClose } = useModal();
  const { credits } = useBilling();

  function handleClick() {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerful feature that lets you automate tasks with the click of a button!"
      >
        <Workflowform />
      </CustomModal>,
    );
  }
  return (
    <Button
      size={"default"}
      {...(credits !== "0" ? { onClick: handleClick } : { disabled: true })}
    >
      <Plus />
    </Button>
  );
}

export default WorkflowButton;
