import { CONNECTIONS } from '@/lib/constant'
import React from 'react'
import ConnectionCard from './_components/connection-card'
import { currentUser } from '@clerk/nextjs/server'
import { onDiscordConnect } from './_actions/discord-connection'
import { onNotionConnect } from './_actions/notion-connection'
import { onSlackConnect } from './_actions/slack-connection'
import { getUserData } from './_actions/get-user'

export default async function Connections({ searchParams }: any) {
  const {
    webhook_id,
    webhook_name,
    webhook_url,
    guild_id,
    guild_name,
    channel_id,
    bun, run, dev,
    access_token,
    workspace_name,
    workspace_icon,
    workspace_id,
    database_id,
    app_id,
    authed_user_id,
    authed_user_token,
    slack_access_token,
    bot_user_id,
    team_id,
    team_name,
  } = searchParams ?? {
    webhook_id: '',
    webhook_name: '',
    webhook_url: '',
    guild_id: '',
    guild_name: '',
    channel_id: '',
    access_token: '',
    workspace_name: '',
    workspace_icon: '',
    workspace_id: '',
    database_id: '',
    app_id: '',
    authed_user_id: '',
    authed_user_token: '',
    slack_access_token: '',
    bot_user_id: '',
    team_id: '',
    team_name: '',
  }

  const user = await currentUser()
  if (!user) return null

  const onUserConnections = async () => {
    // Only connect Discord if webhook_id is present in the URL
    if (webhook_id) {
      await onDiscordConnect(
        Array.isArray(channel_id) ? channel_id[0] : channel_id || '',
        Array.isArray(webhook_id) ? webhook_id[0] : webhook_id || '',
        Array.isArray(webhook_name) ? webhook_name[0] : webhook_name || '',
        Array.isArray(webhook_url) ? webhook_url[0] : webhook_url || '',
        user.id,
        Array.isArray(guild_name) ? guild_name[0] : guild_name || '',
        Array.isArray(guild_id) ? guild_id[0] : guild_id || ''
      )
    }

    // Only connect Notion if all params are present
    if (access_token && workspace_id && workspace_icon && workspace_name && database_id) {
      await onNotionConnect({
        access_token: Array.isArray(access_token) ? access_token[0] : access_token,
        workspace_id: Array.isArray(workspace_id) ? workspace_id[0] : workspace_id,
        workspace_icon: Array.isArray(workspace_icon) ? workspace_icon[0] : workspace_icon,
        workspace_name: Array.isArray(workspace_name) ? workspace_name[0] : workspace_name,
        database_id: Array.isArray(database_id) ? database_id[0] : database_id,
        id: user.id,
      })
    }

    // Only connect Slack if app_id is present
    if (app_id) {
      await onSlackConnect(
        Array.isArray(app_id) ? app_id[0] : app_id || '',
        Array.isArray(authed_user_id) ? authed_user_id[0] : authed_user_id || '',
        Array.isArray(authed_user_token) ? authed_user_token[0] : authed_user_token || '',
        Array.isArray(slack_access_token) ? slack_access_token[0] : slack_access_token || '',
        Array.isArray(bot_user_id) ? bot_user_id[0] : bot_user_id || '',
        Array.isArray(team_id) ? team_id[0] : team_id || '',
        Array.isArray(team_name) ? team_name[0] : team_name || '',
        user.id
      )
    }

    // Always get user info and build connections object
    const connections: any = {}
    const user_info = await getUserData(user.id)
    user_info?.connections.map((connection: { type: string }) => {
      connections[connection.type] = true
      return (connections[connection.type] = true)
    })
    return { ...connections, 'Google Drive': true }
  }

  const connections = await onUserConnections()

  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Connections
      </h1>
      <div className="relative flex flex-col gap-4">
        <section className="flex flex-col gap-4 p-6 text-muted-foreground">
          Connect all your apps directly from here. You may need to connect
          these apps regularly to refresh verification
          {CONNECTIONS.map((connection) => (
            <ConnectionCard
              key={connection.title}
              description={connection.description}
              title={connection.title}
              icon={connection.image}
              type={connection.title}
              connected={connections}
            />
          ))}
        </section>
      </div>
    </div>
  )
}