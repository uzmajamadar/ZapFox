import axios from 'axios'
import { NextResponse, NextRequest } from 'next/server'
import url from 'url'
import { db } from '@/lib/db' // Adjust the import based on your project structure

export async function GET(req: NextRequest) {
  try {
    const code = req.nextUrl.searchParams.get('code')
    if (!code) {
      // No code in query, redirect or return error
      return NextResponse.redirect('')
    }

    const data = new url.URLSearchParams()
    data.append('client_id', process.env.DISCORD_CLIENT_ID!)
    data.append('client_secret', process.env.DISCORD_CLIENT_SECRET!)
    data.append('grant_type', 'authorization_code')
    data.append(
      'redirect_uri',
      'https://localhost:3000/api/auth/callback/discord'
    )
    data.append('code', code.toString())

    const output = await axios.post(
      'https://discord.com/api/oauth2/token',
      data,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )

    if (output.data) {
      const access = output.data.access_token
      const UserGuilds: any = await axios.get(
        `https://discord.com/api/users/@me/guilds`,
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      )

      const UserGuild = UserGuilds.data.filter(
        (guild: any) => guild.id == output.data.webhook.guild_id
      )

      // Retrieve userId from session, token, or request (replace this with your actual logic)
      const userId = req.headers.get('x-user-id'); // Example: get from custom header, adjust as needed

      if (!userId) {
        return NextResponse.redirect('https://localhost:3000/connections');
      }

      // After successful OAuth and getting user info
      await db.user.update({
        where: { clerkId: userId },
        data: {
          discordConnected: true,
          discordAccessToken: output.data.access_token,
          // ...other Discord info
        },
      })

      return NextResponse.redirect(
        `https://localhost:3000/connections?webhook_id=${output.data.webhook.id}&webhook_url=${output.data.webhook.url}&webhook_name=${output.data.webhook.name}&guild_id=${output.data.webhook.guild_id}&guild_name=${UserGuild[0]?.name ?? ''}&channel_id=${output.data.webhook.channel_id}`
      )
    }

    // If output.data is missing, redirect
    return NextResponse.redirect('https://localhost:3000/connections')
  } catch (error) {
    // On error, always return a response
    return NextResponse.redirect('https://localhost:3000/connections')
  }
}
