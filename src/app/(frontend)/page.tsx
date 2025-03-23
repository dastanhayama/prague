import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
// import MediaFileUpload from '@/components/MediaFileUpload'
// import ToastExample from '@/components/Toast/ToastExample'
// import IconUsageExamle from '@/components/FeaturedIcon/IconUsageExamle'
// import BackgroundPatternDecorative from '@/components/BackgroundPatternDecorative'
// import EmptyStateUsage from '@/components/EmptyState/EmptyStateUsage'
// import SectionLabel from '@/components/SectionLabel'
// import SectionHeader from '@/components/SectionHeader'
// import AvatarUsageExample from '@/components/Avatar/AvatarUsageExample'
// import PageHeaderUsage from '@/components/PageHeader/PageHeaderUsage'
import config from '@/payload.config'
import './globals.css'
// import AvatarLabelGroupUsage from '@/components/AvatarLabelGroup/AvatarLabelGroupUsage'
// import NavAccountCard from '@/components/NavAccountCard'
// import NavItemBaseUsage from '@/components/NavItemBase/NavItemBaseUsage'
// import BadgeUsageExample from '@/components/Badge/BadgeUsageExample'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="min-h-screen flex flex-col items-center justify-start relative w-full py-12">
      {/* <h1 className="text-2xl font-bold p-6">Приложение с Toast-уведомлениями</h1> */}
      {/* <ToastExample /> */}
      {/* <MediaFileUpload
        multiple={true} // возможность загружать несколько файлов
        accept={['image/png', 'image/jpeg', 'video/mpeg', 'video/mp4', 'video/mov']} // допустимые форматы
        maxSize={10 * 1024 * 1024} // максимальный размер файла (10MB)
      /> */}
      {/* <EmptyStateUsage /> */}
      {/* <IconUsageExamle /> */}
      {/* <BackgroundPatternDecorative background={true} size="md" type="circles" />
      <BackgroundPatternDecorative background={true} size="md" type="grid" />
      <BackgroundPatternDecorative background={true} size="md" type="grid-dot" />
      <BackgroundPatternDecorative background={true} size="md" type="squares" />
      <BackgroundPatternDecorative background={true} size="md" type="empty" /> */}
      {/* <SectionLabel
        size="sm"
        tooltip={true}
        required={true}
        supportingText="Manage your team members here."
        label="Team members"
      />
      <SectionLabel
        size="md"
        tooltip={true}
        required={true}
        supportingText="Manage your team members here."
        label="Team members"
      />
      <div className="w-full">
        <SectionHeader
          type="buttons"
          tabs={false}
          actions={true}
          label="Team members"
          supportingText="Manage your team members and their account permissions here."
          dropdownIcon={true}
          tooltip={true}
          divider={true}
        />
      </div> */}
     {/* <PageHeaderUsage /> */}
      {/* <AvatarUsageExample /> */}
      {/* <BadgeUsageExample /> */}
      {/* <NavItemBaseUsage /> */}
      {/* <AvatarLabelGroupUsage /> */}
      {/* <div className='flex flex-col gap-4'>

      <NavAccountCard type='card'/>
      <NavAccountCard type='simple'/>
      
      </div> */}
    </div>
  )
}
