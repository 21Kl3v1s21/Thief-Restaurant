// app/api/subscribe/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const response = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': process.env.BREVO_API_KEY!,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      email,
      listIds: [3], // Replace with the numeric ID of your list
      updateEnabled: true,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    console.error('Brevo error:', data)
    return NextResponse.json({ error: data.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
