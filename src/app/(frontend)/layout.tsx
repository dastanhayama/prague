import React from 'react'
import './globals.css'
import { ToastProvider } from '@/components/Toast/ToastContext'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>
        <ToastProvider>
        {children}
        </ToastProvider>  
        </main>
      </body>
    </html>
  )
}
