import React from 'react'
import Avatar from '../Avatar'
import AvatarLabelGroup from './index'

const AvatarLabelGroupUsage = () => {
    const avatar = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
    const companyIcon = "https://plus.unsplash.com/premium_photo-1668902224245-0f09f90a7a15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D"

  return (
    <div className='flex items-center gap-4'>
        <AvatarLabelGroup
        size="xl"
        text="Olivia Rhye"
        supportingText="Software Engineer"
        avatar={
          <Avatar
            size="2xl"
            contrastBorder
            state="default"
            statusIcon={false}
            status="verified"
            avatar={avatar}
            companyIcon={companyIcon}
          />
        }
      />
      <AvatarLabelGroup
        size="lg"
        text="Olivia Rhye"
        supportingText="Software Engineer"
        avatar={
          <Avatar
            size="xl"
            contrastBorder
            state="default"
            statusIcon={false}
            status="verified"
            avatar={avatar}
            companyIcon={companyIcon}
          />
        }
      />
      <AvatarLabelGroup
        size="md"
        text="Olivia Rhye"
        supportingText="Software Engineer"
        avatar={
          <Avatar
            size="lg"
            contrastBorder
            state="default"
            statusIcon={false}
            status="verified"
            avatar={avatar}
            companyIcon={companyIcon}
          />
        }
      />
      <AvatarLabelGroup
        size="sm"
        text="Olivia Rhye"
        supportingText="Software Engineer"
        avatar={
          <Avatar
            size="md"
            contrastBorder
            state="default"
            statusIcon={false}
            status="verified"
            avatar={avatar}
            companyIcon={companyIcon}
          />
        }
      />
    </div>
  )
}

export default AvatarLabelGroupUsage