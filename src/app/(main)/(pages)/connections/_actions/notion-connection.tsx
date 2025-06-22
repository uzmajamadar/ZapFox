'use server'

import { db } from '@/lib/db'
import { currentUser  } from '@clerk/nextjs/server'
import { Client } from '@notionhq/client'

interface NotionConnectionData {
  access_token: string
  workspace_id: string
  workspace_icon: string
  workspace_name: string
  database_id: string
  id: string
}

export const onNotionConnect = async ({
  access_token,
  workspace_id,
  workspace_icon,
  workspace_name,
  database_id,
  id,
}: NotionConnectionData) => {
  try {
    if (!access_token) {
      throw new Error('Access token is required')
    }

    // Check if Notion is already connected
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
    })

    if (!notion_connected) {
      // Create a new connection
      await db.notion.create({
        data: {
          userId: id,
          workspaceIcon: workspace_icon,
          accessToken: access_token,
          workspaceId: workspace_id,
          workspaceName: workspace_name,
          databaseId: database_id,
          connections: {
            create: {
              userId: id,
              type: 'Notion',
            },
          },
        },
      })
    }
  } catch (error) {
    console.error('Error in onNotionConnect:', error)
    throw new Error('Failed to connect Notion')
  }
}

export const getNotionConnection = async () => {
  try {
    const user = await currentUser ()
    if (!user) {
      throw new Error('User  not authenticated')
    }

    const connection = await db.notion.findFirst({
      where: {
        userId: user.id,
      },
    })

    if (!connection) {
      throw new Error('No Notion connection found')
    }

    return connection
  } catch (error) {
    console.error('Error in getNotionConnection:', error)
    throw new Error('Failed to retrieve Notion connection')
  }
}

export const getNotionDatabase = async (
  databaseId: string,
  accessToken: string
) => {
  try {
    if (!databaseId || !accessToken) {
      throw new Error('Database ID and access token are required')
    }

    const notion = new Client({
      auth: accessToken,
    })

    const response = await notion.databases.retrieve({ database_id: databaseId })
    return response
  } catch (error) {
    console.error('Error in getNotionDatabase:', error)
    throw new Error('Failed to retrieve Notion database')
  }
}

export const onCreateNewPageInDatabase = async (
  databaseId: string,
  accessToken: string,
  content: string
) => {
  try {
    if (!databaseId || !accessToken || !content) {
      throw new Error('Database ID, access token, and content are required')
    }

    const notion = new Client({
      auth: accessToken,
    })

    const response = await notion.pages.create({
      parent: {
        type: 'database_id',
        database_id: databaseId,
      },
      properties: {
        title: {
          title: [
            {
              text: {
                content: content,
              },
            },
          ],
        },
      },
    })

    if (response) {
      return response
    }
  } catch (error) {
    console.error('Error in onCreateNewPageInDatabase:', error)
    throw new Error('Failed to create new page in Notion database')
  }
}