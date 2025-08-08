import { ConnectionTypes } from '@/lib/types'
import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  type: ConnectionTypes
  icon: string
  title: ConnectionTypes
  description: string
  callback?: () => void
  connected: {} & any
}

const ConnectionCard = ({
  description,
  type,
  icon,
  title,
  connected,
}: Props) => {
  console.log({
    type,
    title,
    connected: connected[type],
    discordRedirect: process.env.NEXT_PUBLIC_DISCORD_REDIRECT,
  });

  return (
    <Card className="flex w-full items-center justify-between">
      <CardHeader className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <Image
            src={icon}
            alt={title}
            height={30}
            width={30}
            className="object-contain"
          />
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <div className="flex flex-col items-center gap-2 p-4">
        {connected[type] ? (
          <div className="border-bg-primary rounded-lg border-2 px-3 py-2 font-bold text-white">
            Connected
          </div>
        ) : (
          (() => {
            let href: string | undefined;
            if (title === 'Discord') href = process.env.NEXT_PUBLIC_DISCORD_AUTH_URL;
            else if (title === 'Notion') href = process.env.NEXT_PUBLIC_NOTION_AUTH_URL;
            else if (title === 'Slack') href = process.env.NEXT_PUBLIC_SLACK_REDIRECT;

            return href ? (
              <Link
                href={href}
                className="rounded-lg bg-primary p-2 font-bold text-primary-foreground"
              >
                Connect
              </Link>
            ) : null;
          })()
        )}
      </div>
    </Card>
  )
}

export default ConnectionCard
