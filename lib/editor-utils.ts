import { ConnectionProviderProps } from "@/providers/connections-provider";
import { EditorCanvasCardType } from "./types";
import { EditorState } from "@/providers/editor-provider";
// import { getDiscordConnectionUrl } from "@/app/(main)/(pages)/connections/_actions/discord-connection";
// import {
//   getNotionConnection,
//   getNotionDatabase,
// } from "@/app/(main)/(pages)/connections/_actions/notion-connection";
import {
  //   getSlackConnection,
  listBotChannels,
} from "@/app/(main)/(pages)/connections/_actions/slack-connection";
import { Option } from "@/components/ui/multiple-selector";
import { getDiscordConnectionUrl } from "@/app/(main)/(pages)/connections/_actions/discord-connection";
import {
  getNotionConnection,
  getNotionDatabase,
} from "@/app/(main)/(pages)/connections/_actions/notion-connection";
import { getSlackConnection } from "@/app/(main)/(pages)/connections/_actions/slack-connection";

export function onDragStart(
  event: any,
  nodeType: EditorCanvasCardType["type"],
) {
  event.dataTransfer.setData("application/reactflow", nodeType);
  event.dataTransfer.effectAllowed = "move";
}

export function onSlackContent(
  nodeConnection: ConnectionProviderProps,
  event: React.ChangeEvent<HTMLInputElement>,
) {
  nodeConnection.setSlackNode((prev: any) => ({
    ...prev,
    content: event.target.value,
  }));
}

export function onDiscordContent(
  nodeConnection: ConnectionProviderProps,
  event: React.ChangeEvent<HTMLInputElement>,
) {
  nodeConnection.setDiscordNode((prev: any) => ({
    ...prev,
    content: event.target.value,
  }));
}

export function onContentChange(
  nodeConnection: ConnectionProviderProps,
  nodeType: string,
  event: React.ChangeEvent<HTMLInputElement>,
) {
  if (nodeType === "Slack") {
    onSlackContent(nodeConnection, event);
  } else if (nodeType === "Discord") {
    onDiscordContent(nodeConnection, event);
  } else if (nodeType === "Notion") {
    onNotionContent(nodeConnection, event);
  }
}

export function onAddTemplateSlack(
  nodeConnection: ConnectionProviderProps,
  template: string,
) {
  nodeConnection.setSlackNode((prev: any) => ({
    ...prev,
    content: `${prev.content} ${template}`,
  }));
}

export function onAddTemplateDiscord(
  nodeConnection: ConnectionProviderProps,
  template: string,
) {
  nodeConnection.setDiscordNode((prev: any) => ({
    ...prev,
    content: `${prev.content} ${template}`,
  }));
}

export function onAddTemplate(
  nodeConnection: ConnectionProviderProps,
  title: string,
  template: string,
) {
  if (title === "Slack") {
    onAddTemplateSlack(nodeConnection, template);
  } else if (title === "Discord") {
    onAddTemplateDiscord(nodeConnection, template);
  }
}

export async function onConnections(
  nodeConnection: ConnectionProviderProps,
  editorState: EditorState,
  googleFile: any,
) {
  if (editorState.editor.selectedNode.data.title == "Discord") {
    const connection = await getDiscordConnectionUrl();
    if (connection) {
      nodeConnection.setDiscordNode({
        webhookURL: connection.url,
        content: "",
        webhookName: connection.name,
        guildName: connection.guildName,
      });
    }
  }
  if (editorState.editor.selectedNode.data.title == "Notion") {
    const connection = await getNotionConnection();
    if (connection) {
      nodeConnection.setNotionNode({
        accessToken: connection.accessToken,
        databaseId: connection.databaseId,
        workspaceName: connection.workspaceName,
        content: {
          name: googleFile.name,
          kind: googleFile.kind,
          type: googleFile.mimeType,
        },
      });

      if (nodeConnection.notionNode.databaseId !== "") {
        const response = await getNotionDatabase(
          nodeConnection.notionNode.databaseId,
          nodeConnection.notionNode.accessToken,
        );
      }
    }
  }
  if (editorState.editor.selectedNode.data.title == "Slack") {
    const connection = await getSlackConnection();
    if (connection) {
      nodeConnection.setSlackNode({
        appId: connection.appId,
        authedUserId: connection.authedUserId,
        authedUserToken: connection.authedUserToken,
        slackAccessToken: connection.slackAccessToken,
        botUserId: connection.botUserId,
        teamId: connection.teamId,
        teamName: connection.teamName,
        userId: connection.userId,
        content: "",
      });
    }
  }
}

export async function fetchBotSlackChannels(
  token: string,
  setSlackChannels: (slackChannels: Option[]) => void,
) {
  await listBotChannels(token)?.then((channels) => setSlackChannels(channels));
}

export function onNotionContent(
  nodeConnection: ConnectionProviderProps,
  event: React.ChangeEvent<HTMLInputElement>,
) {
  nodeConnection.setNotionNode((prev: any) => ({
    ...prev,
    content: event.target.value,
  }));
}
