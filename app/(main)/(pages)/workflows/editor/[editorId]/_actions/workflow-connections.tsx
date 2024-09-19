"use server";

import { db } from "@/lib/db";

export async function onCreateNodesEdges(
  flowId: string,
  nodes: string,
  edges: string,
  flowPath: string,
) {
  console.log("flowId:" + flowId);
  console.log("nodes" + nodes);
  console.log("edges:" + edges);
  console.log("flowPath:" + flowPath);
  const flow = await db.workflows.update({
    where: {
      id: flowId,
    },
    data: {
      nodes,
      edges,
      flowPath: flowPath,
    },
  });

  if (flow) return { message: "Workflow saved" };
}

export async function onFlowPublish(workflowId: string, state: boolean) {
  console.log(state);
  const published = await db.workflows.update({
    where: {
      id: workflowId,
    },
    data: {
      publish: state,
    },
  });

  if (published.publish) return "Workflow published";
  return "Workflow unpublished";
}
