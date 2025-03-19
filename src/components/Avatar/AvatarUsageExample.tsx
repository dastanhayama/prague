import React from 'react'
import Avatar from '@/components/Avatar'


const AvatarUsageExample = () => {
    const avatar = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
    const companyIcon = "https://plus.unsplash.com/premium_photo-1668902224245-0f09f90a7a15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D"
  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-8 w-full  h-screen">
        <div className="flex items-start gap-4 ">
          <Avatar
            size="3xl"
            contrastBorder
            placeholder={true}
            state="default"
            statusIcon={true}
            status="online"
            text="Olivia Rhye"
            avatar={avatar}
            companyIcon={companyIcon}
          /> <Avatar
          size="3xl"
          contrastBorder
          placeholder={true}
          state="default"
          statusIcon={true}
          status="online"
          avatar={avatar}
          companyIcon={companyIcon}
        />
         <Avatar
            size="3xl"
            contrastBorder
            placeholder={false}
            state="default"
            statusIcon={true}
            status="online"
            avatar={avatar}
            companyIcon={companyIcon}
          />
        </div>
      </div>
  )
}

export default AvatarUsageExample