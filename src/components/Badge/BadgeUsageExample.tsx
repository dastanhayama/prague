import React from 'react'
import Badge from '@/components/Badge'
import Dot from '../Dot'
import ArrowUp from '@icons/Arrows/arrow-up.svg'
import ArrowRight from '@icons/Arrows/arrow-right.svg'
import PlusIcon from '@icons/General/plus.svg'
import CloseIcon from '@icons/General/x-close.svg'
import Avatar from '../Avatar'

const BadgeUsageExample = () => {
  const avatar =
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww'

  return (
    <div className="flex flex-col gap-4">
      <div className="flex item-start gap-4">
        <Badge label="Label" type="pill color" color="success" size="lg" />
        <Badge label="Label" type="pill outline" color="warning" size="lg" />
        <Badge label="Label" type="badge modern" color="gray" size="lg" />
        <Badge label="Label" type="badge color" color="blue light" size="lg" />
      </div>
      {/* <div className="flex item-start gap-4">
        <Badge
          label="Label"
          type="pill color"
          color="success"
          size="lg"
          icon={
            <Avatar size="xs" avatar={avatar} contrastBorder state="default" statusIcon={false} />
          }
          iconPosition="left"
        />
        <Badge
          label="Label"
          type="pill outline"
          color="warning"
          size="lg"
          icon={
            <Avatar size="xs" avatar={avatar} contrastBorder state="default" statusIcon={false} />
          }
          iconPosition="left"
        />
        <Badge
          label="Label"
          type="badge modern"
          color="gray"
          size="lg"
          icon={
            <Avatar size="xs" avatar={avatar} contrastBorder state="default" statusIcon={false} />
          }
          iconPosition="left"
        />
        <Badge
          label="Label"
          type="badge color"
          color="blue light"
          size="lg"
          icon={
            <Avatar size="xs" avatar={avatar} contrastBorder state="default" statusIcon={false} />
          }
          iconPosition="left"
        />
      </div> */}
      <div className="flex item-start gap-4">
        <Badge
          label="Label"
          type="pill color"
          color="success"
          size="lg"
          icon={<Dot size="sm" color="success" />}
          iconPosition="left"
        />
        <Badge
          label="Label"
          type="pill outline"
          color="warning"
          size="lg"
          icon={<Dot size="sm" color="warning" />}
          iconPosition="left"
        />
        <Badge
          label="Label"
          type="badge modern"
          color="gray"
          size="lg"
          icon={<Dot size="sm" color="error" />}
          iconPosition="left"
        />
        <Badge
          label="Label"
          type="badge color"
          color="blue light"
          size="lg"
          icon={<Dot size="sm" color="blue light" />}
          iconPosition="left"
        />
      </div>
      <div className="flex item-start gap-4">
        <Badge
          label="Label"
          type="pill color"
          color="success"
          size="xs"
          icon={ArrowUp}
          iconPosition="left"
        />
        <Badge
          label="Label"
          type="pill outline"
          color="warning"
          size="sm"
          icon={ArrowUp}
          iconPosition="left"
        />
        <Badge
          label="Label"
          type="badge modern"
          color="gray"
          size="md"
          icon={ArrowUp}
          iconPosition="left"
        />
        <Badge
          label="Label"
          type="badge color"
          color="blue light"
          size="lg"
          icon={ArrowUp}
          iconPosition="left"
        />
      </div>
      <div className="flex item-start gap-4">
        <Badge
          label="Label"
          type="pill color"
          color="success"
          size="xs"
          icon={ArrowRight}
          iconPosition="right"
        />
        <Badge
          label="Label"
          type="pill outline"
          color="warning"
          size="sm"
          icon={ArrowRight}
          iconPosition="right"
        />
        <Badge
          label="Label"
          type="badge modern"
          color="gray"
          size="md"
          icon={ArrowRight}
          iconPosition="right"
        />
        <Badge
          label="Label"
          type="badge color"
          color="blue light"
          size="lg"
          icon={ArrowRight}
          iconPosition="right"
        />
      </div>
      <div className="flex item-start gap-4">
        <Badge
          label="Label"
          type="pill color"
          color="success"
          size="xs"
          icon={CloseIcon}
          iconPosition="right"
        />
        <Badge
          label="Label"
          type="pill outline"
          color="warning"
          size="sm"
          icon={CloseIcon}
          iconPosition="right"
        />
        <Badge
          label="Label"
          type="badge modern"
          color="gray"
          size="md"
          icon={CloseIcon}
          iconPosition="right"
        />
        <Badge
          label="Label"
          type="badge color"
          color="blue light"
          size="lg"
          icon={CloseIcon}
          iconPosition="right"
        />
      </div>
      <div className="flex item-start gap-4">
        <Badge
          label="Label"
          type="pill color"
          color="success"
          size="xs"
          icon={PlusIcon}
          iconPosition="only"
        />
        <Badge
          label="Label"
          type="pill outline"
          color="warning"
          size="xs"
          icon={PlusIcon}
          iconPosition="only"
        />
        <Badge
          label="Label"
          type="badge modern"
          color="gray"
          size="xs"
          icon={PlusIcon}
          iconPosition="only"
        />
        <Badge
          label="Label"
          type="badge color"
          color="blue light"
          size="xs"
          icon={PlusIcon}
          iconPosition="only"
        />
      </div>
      <div className="flex item-start gap-4">
        <Badge
          label="Label"
          type="pill color"
          color="success"
          size="sm"
          icon={PlusIcon}
          iconPosition="only"
        />
        <Badge
          label="Label"
          type="pill outline"
          color="warning"
          size="sm"
          icon={PlusIcon}
          iconPosition="only"
        />
        <Badge
          label="Label"
          type="badge modern"
          color="gray"
          size="sm"
          icon={PlusIcon}
          iconPosition="only"
        />
        <Badge
          label="Label"
          type="badge color"
          color="blue light"
          size="sm"
          icon={PlusIcon}
          iconPosition="only"
        />
      </div>
      <div className="flex item-start gap-4">
        <Badge
          label="Label"
          type="pill color"
          color="success"
          size="md"
          icon={PlusIcon}
          iconPosition="only"
        />
        <Badge
          label="Label"
          type="pill outline"
          color="warning"
          size="md"
          icon={PlusIcon}
          iconPosition="only"
        />
        <Badge
          label="Label"
          type="badge modern"
          color="gray"
          size="md"
          icon={PlusIcon}
          iconPosition="only"
        />
        <Badge
          label="Label"
          type="badge color"
          color="blue light"
          size="md"
          icon={PlusIcon}
          iconPosition="only"
        />
      </div>
      <div className="flex item-start gap-4">
        <Badge
          label="Label"
          type="pill color"
          color="success"
          size="lg"
          icon={PlusIcon}
          iconPosition="only"
        />
        <Badge
          label="Label"
          type="pill outline"
          color="warning"
          size="lg"
          icon={PlusIcon}
          iconPosition="only"
        />
        <Badge
          label="Label"
          type="badge modern"
          color="gray"
          size="lg"
          icon={PlusIcon}
          iconPosition="only"
        />
        <Badge
          label="Label"
          type="badge color"
          color="blue light"
          size="lg"
          icon={PlusIcon}
          iconPosition="only"
        />
      </div>
    </div>
  )
}

export default BadgeUsageExample
