import { ConnectionTypes } from "@/lib/types";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type Props = {
  type: ConnectionTypes;
  icon: string;
  title: ConnectionTypes;
  description: string;
  callback?: () => void;
  connected: {} & any;
};

function ConnectionCard(props: Props) {
  return (
    <Link
      href={
        props.title == "Discord"
          ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
          : props.title == "Notion"
            ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
            : props.title == "Slack"
              ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
              : "#"
      }
    >
      <Card className="bg-transparent flex w-full items-center justify-between hover:bg-[#2F006B] hover:text-white transition-colors duration-300">
        <CardHeader className="flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            <Image
              src={props.icon}
              alt={props.title}
              height={30}
              width={30}
              className="object-contain"
            />
          </div>
          <div>
            <CardTitle className="text-lg">{props.title}</CardTitle>
            <CardDescription>{props.description}</CardDescription>
          </div>
        </CardHeader>
        <div className="flex flex-col items-center gap-2 p-4">
          {props.connected[props.type] ? (
            <div className="border-bg-primary rounded-lg border-2 px-3 py-2 font-bold">
              Connected
            </div>
          ) : (
            <Link
              href={
                props.title == "Discord"
                  ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
                  : props.title == "Notion"
                    ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
                    : props.title == "Slack"
                      ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
                      : "#"
              }
              className="border-bg-primary rounded-lg border-2 px-3 py-2"
            >
              Connect
            </Link>
          )}
        </div>
      </Card>
    </Link>
  );
}

export default ConnectionCard;
