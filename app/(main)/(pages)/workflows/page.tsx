import React from "react";
import AddWorkflowButton from "./_components/workflow-button";
import Workflows from "./_components";

function WorkflowPage() {
  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Workflows
      </h1>
      <div className="w-full flex justify-end px-6">
        <AddWorkflowButton />
      </div>
      <Workflows />
    </div>
  );
}

export default WorkflowPage;
