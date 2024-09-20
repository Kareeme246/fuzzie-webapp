"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { Client } from "@notionhq/client";

export async function onNotionConnect(
  access_token: string,
  workspace_id: string,
  workspace_icon: string,
  workspace_name: string,
  database_id: string,
  id: string,
) {
  "use server";
  if (access_token) {
    //check if notion is connected
    const notion_connected = await db.notion.findFirst({
      where: {
        accessToken: access_token,
      },
      include: {
        connections: {
          select: {
            type: true,
          },
        },
      },
    });

    if (!notion_connected) {
      //create connection
      await db.notion.create({
        data: {
          userId: id,
          workspaceIcon: workspace_icon!,
          accessToken: access_token,
          workspaceId: workspace_id!,
          workspaceName: workspace_name!,
          databaseId: database_id,
          connections: {
            create: {
              userId: id,
              type: "Notion",
            },
          },
        },
      });
    }
  }
}
export async function getNotionConnection() {
  const user = await currentUser();
  if (user) {
    const connection = await db.notion.findFirst({
      where: {
        userId: user.id,
      },
    });
    if (connection) {
      return connection;
    }
  }
}

export async function getNotionDatabase(
  databaseId: string,
  accessToken: string,
) {
  const notion = new Client({
    auth: accessToken,
  });
  const response = await notion.databases.retrieve({ database_id: databaseId });
  return response;
}

export async function onCreateNewPageInDatabase(
  databaseId: string,
  accessToken: string,
  content: string,
) {
  const notion = new Client({
    auth: accessToken,
  });

  const response = await notion.pages.create({
    parent: {
      type: "database_id",
      database_id: databaseId,
    },
    properties: {
      name: [
        {
          text: {
            content: content,
          },
        },
      ],
    },
  });
  if (response) {
    return response;
  }
}
