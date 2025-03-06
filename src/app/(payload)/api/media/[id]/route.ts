// app/api/media/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    
    if (!id) {
      return NextResponse.json(
        { error: 'Media ID is required' },
        { status: 400 }
      )
    }

    // Initialize Payload
    const payload = await getPayload({ config: await config })
    
    if (!payload) {
      return NextResponse.json(
        { error: 'Failed to initialize Payload CMS' },
        { status: 500 }
      )
    }

    // Delete the media file
    const deleted = await payload.delete({
      collection: 'media', // Make sure this matches your collection name
      id,
    })

    return NextResponse.json({ success: true, deleted })
  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json(
      { error: `Failed to delete media: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    )
  }
}