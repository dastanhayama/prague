// app/api/media/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function POST(req: NextRequest) {
  try {
    // Initialize Payload
    const payload = await getPayload({ config: await config })
    
    if (!payload) {
      return NextResponse.json(
        { errors: ['Failed to initialize Payload CMS'] },
        { status: 500 }
      )
    }

    // Parse the multipart form data
    const formData = await req.formData()
    const uploadedDocs = []
    const errors = []

    // Handle multiple files
    const mediaFiles = formData.getAll('media')
    
    for (const mediaFile of mediaFiles) {
      if (!(mediaFile instanceof File)) {
        errors.push(`Invalid file format for file`)
        continue
      }

      try {
        // Create a buffer from the file
        const buffer = Buffer.from(await mediaFile.arrayBuffer())
        
        // Upload to Payload CMS
        const uploaded = await payload.create({
          collection: 'media', // Make sure this matches your collection name in Payload config
          data: {
            alt: mediaFile.name, // You can customize this
          },
          file: {
            data: buffer,
            mimetype: mediaFile.type,
            name: mediaFile.name,
            size: mediaFile.size,
          },
        })
        
        uploadedDocs.push(uploaded)
      } catch (error) {
        console.error('Upload error:', error)
        errors.push(`Failed to upload ${mediaFile.name}: ${error instanceof Error ? error.message : String(error)}`)
      }
    }

    return NextResponse.json({ 
      docs: uploadedDocs,
      errors
    })
  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      { errors: [`Server error: ${error instanceof Error ? error.message : String(error)}`] },
      { status: 500 }
    )
  }
}

