import React from 'react'
import PageHeader from '@/components/PageHeader'
import Avatar from '@/components/Avatar'


const PageHeaderUsage = () => {
    const avatarUrl = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"

    const avatar = <Avatar
    size="3xl"
    contrastBorder
    placeholder={false}
    state="default"
    statusIcon={true}
    status="verified"
    avatar={avatarUrl}
/>
  return (
    <div className="w-full h-[200vh] flex flex-col gap-12">
    <PageHeader
      type="avatar"
      banner={true}
      actions={true}
      search={true}
      label="Olivia Rhye"
      centered={true}
      collapse={true}
      supportingText="olivia@gmail.com"
      divider={true}
      avatar={avatar}
    />
    <PageHeader
      type="simple"
      banner={false}
      actions={true}
      search={true}
      label="Olivia Rhye"
      centered={true}
      collapse={false}
      supportingText="olivia@gmail.com"
      divider={true}
    />
    <PageHeader
      type="simple"
      banner={false}
      actions={true}
      search={true}
      label="Olivia Rhye"
      centered={false}
      collapse={false}
      supportingText="olivia@gmail.com"
      divider={true}
    />
  </div>
  )
}

export default PageHeaderUsage