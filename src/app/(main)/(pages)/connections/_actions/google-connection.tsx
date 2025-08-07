import { google } from 'googleapis'
import { auth, clerkClient as getClerkClient } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function GET() {
  // Validate environment variables
  const requiredEnvVars = [
    'GOOGLE_CLIENT_ID',
    'GOOGLE_CLIENT_SECRET',
    'OAUTH2_REDIRECT_URI',
  ]
  
  for (const varName of requiredEnvVars) {
    if (!process.env[varName]) {
      return NextResponse.json(
        { message: `Missing environment variable: ${varName}` },
        { status: 500 }
      )
    }
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.OAUTH2_REDIRECT_URI
  )

  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    // Get the Clerk client instance
    const clerk = await getClerkClient()
    const clerkResponse = await clerk.users.getUserOauthAccessToken(
      userId,
      'oauth_google'
    )

    if (!clerkResponse || !clerkResponse.data || clerkResponse.data.length === 0 || !clerkResponse.data[0].token) {
      return NextResponse.json(
        { message: 'No Google access token found' },
        { status: 401 }
      )
    }

    const accessToken = clerkResponse.data[0].token
    oauth2Client.setCredentials({ access_token: accessToken })

    const drive = google.drive({ version: 'v3', auth: oauth2Client })
    const response = await drive.files.list({
      pageSize: 10,
      fields: 'files(id, name, mimeType, webViewLink)'
    })

    return NextResponse.json(response.data.files || [])
  } catch (error) {
    console.error('Google Drive API error:', error)
    return NextResponse.json(
      { message: 'Failed to access Google Drive' },
      { status: 500 }
    )
  }
}