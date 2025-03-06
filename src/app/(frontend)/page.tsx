import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import MediaFileUpload from '@/components/MediaFileUpload'

import config from '@/payload.config'
import './globals.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <MediaFileUpload 
      multiple={true} // возможность загружать несколько файлов
      accept={['image/png', 'image/jpeg']} // допустимые форматы
      maxSize={10 * 1024 * 1024} // максимальный размер файла (10MB)
      />
    </div>
  )
}
