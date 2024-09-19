import React from "react";
import Workflow from "./workflow";
import { onGetWorkflows } from "../_actions/workflow-connections";
import MoreCredits from "./more-credits";

type Props = {};

async function Workflows({}: Props) {
  const workflows = await onGetWorkflows();
  return (
    <div className="relative flex flex-col">
      <section className="flex flex-col gap-2 pl-4 pr-4">
        <MoreCredits />
        {workflows?.length ? (
          workflows.map((flow) => <Workflow key={flow.id} {...flow} />)
        ) : (
          <div className="flex items-center justify-center text-1xl text-muted-foreground">
            Press the button to create your first workflow!
          </div>
        )}
      </section>
    </div>
  );
}

export default Workflows;
