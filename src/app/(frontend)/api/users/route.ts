import { NextResponse } from 'next/server'

// Mock database
const mockUsers = [
  { id: 1, username: 'hayama', phone: '+420777123456' },
  { id: 2, username: 'aoi', phone: '+420999999999' },
]

export async function GET(req: Request) {
  const url = new URL(req.url)
  const identifier = url.searchParams.get('identifier')?.trim()

  if (!identifier) {
    return NextResponse.json({ error: 'Chybějící parametr' }, { status: 400 })
  }

  const foundUser = mockUsers.find(
    (u) => u.username === identifier || u.phone === identifier
  )

  return foundUser
    ? NextResponse.json(foundUser)
    : NextResponse.json(null, { status: 404 })
}
