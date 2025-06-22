'use server';

import type { Option } from '@/components/ui/multiple-selector';
import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';
import axios from 'axios';

export const onSlackConnect = async (
  app_id: string,
  authed_user_id: string,
  authed_user_token: string,
  slack_access_token: string,
  bot_user_id: string,
  team_id: string,
  team_name: string,
  user_id: string
): Promise<void> => {
  if (!slack_access_token) return;

  const user = await db.user.findUnique({ where: { clerkId: user_id } });
  if (!user) throw new Error(`User with ID ${user_id} not found`);

  const slackConnection = await db.slack.findFirst({
    where: { slackAccessToken: slack_access_token },
    include: { connections: true },
  });

  if (!slackConnection) {
    try {
      await db.slack.create({
        data: {
          userId: user_id,
          appId: app_id,
          authedUserId: authed_user_id,
          authedUserToken: authed_user_token,
          slackAccessToken: slack_access_token,
          botUserId: bot_user_id,
          teamId: team_id,
          teamName: team_name,
          connections: {
            create: { userId: user_id, type: 'Slack' },
          },
        },
      });
    } catch (error: unknown) {
      const errorMessage = (error as Error).message;
      console.error('Error creating Slack connection:', errorMessage);
      throw new Error(errorMessage);
    }
  }
};

export const getSlackConnection = async () => {
  const user = await currentUser();
  if (!user) {
    console.error("No user found in getSlackConnection.");
    return null;
  }
  return await db.slack.findFirst({
    where: { userId: user.id },
  });
};

export async function listBotChannels(
  slackAccessToken: string
): Promise<Option[]> {
  const url = `https://slack.com/api/conversations.list?${new URLSearchParams({
    types: 'public_channel,private_channel',
    limit: '200',
  })}`;

  try {
    const { data } = await axios.get(url, {
      headers: { Authorization: `Bearer ${slackAccessToken}` },
    });

    console.log(data);

    if (!data.ok) throw new Error(data.error);

    if (!data?.channels?.length) return [];

    return data.channels
      .filter((ch: any) => ch.is_member)
      .map((ch: any) => {
        return { label: ch.name, value: ch.id };
      });
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    console.error('Error listing bot channels:', errorMessage);
    throw new Error(errorMessage);
  }
}

const postMessageInSlackChannel = async (
  slackAccessToken: string,
  slackChannel: string,
  content: string
): Promise<void> => {
  try {
    await axios.post(
      'https://slack.com/api/chat.postMessage',
      { channel: slackChannel, text: content },
      {
        headers: {
          Authorization: `Bearer ${slackAccessToken}`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    );
    console.log(`Message posted successfully to channel ID: ${slackChannel}`);
  } catch (error: unknown) {
    const errorMessage = (error as Error).message;
    console.error(
      `Error posting message to Slack channel ${slackChannel}:`,
      errorMessage
    );
  }
};

export const postMessageToSlack = async (
  slackAccessToken: string,
  selectedSlackChannels: Option[],
  content: string
): Promise<{ message: string }> => {
  if (!content) return { message: 'Content is empty' };
  if (!selectedSlackChannels?.length) return { message: 'Channel not selected' };

  const errors: string[] = [];
  await Promise.all(
    selectedSlackChannels.map(async (channel) => {
      try {
        await postMessageInSlackChannel(slackAccessToken, channel.value, content);
      } catch (error: unknown) {
        const errorMessage = (error as Error).message;
        errors.push(`Failed to post to channel ${channel.label}: ${errorMessage}`);
      }
    })
  );

  if (errors.length) {
    return { message: `Some messages failed: ${errors.join(', ')}` };
  }

  return { message: 'Success' };
};
