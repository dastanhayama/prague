import React from 'react'
import Badge from '@/components/Badge'
import Dot from '../Dot'
import ArrowUp from '@icons/Arrows/arrow-up.svg'
import ArrowRight from '@icons/Arrows/arrow-right.svg'
import PlusIcon from '@icons/General/plus.svg'


const BadgeUsageExample = () => {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex item-start gap-4'>
      <Badge label="Label" type="pill color" color="success" size='lg' icon={<Dot size='sm' />}  iconPosition="left"/>
      <Badge label="Label" type="pill outline" color="warning" size='lg' icon={<Dot size='sm' />} iconPosition="left"/>
      <Badge label="Label" type="badge modern" color="gray" size='lg' icon={<Dot size='sm' />} iconPosition="left"/>
      <Badge label="Label" type="badge color" color="blue light" size='lg' icon={<Dot size='sm' />} iconPosition="left"/>
      
      </div>
      <div className='flex item-start gap-4'>
      <Badge label="Label" type="pill color" color="success" size='lg' icon={ArrowUp} iconPosition="left"/>
      <Badge label="Label" type="pill outline" color="warning" size='lg' icon={ArrowUp} iconPosition="left"/>
      <Badge label="Label" type="badge modern" color="gray" size='lg' icon={ArrowUp} iconPosition="left"/>
      <Badge label="Label" type="badge color" color="blue light" size='lg' icon={ArrowUp} iconPosition="left"/>
      
      </div>
      <div className='flex item-start gap-4'>
      <Badge label="Label" type="pill color" color="success" size='lg' icon={ArrowRight} iconPosition="right"/>
      <Badge label="Label" type="pill outline" color="warning" size='lg' icon={ArrowRight} iconPosition="right"/>
      <Badge label="Label" type="badge modern" color="gray" size='lg' icon={ArrowRight} iconPosition="right"/>
      <Badge label="Label" type="badge color" color="blue light" size='lg' icon={ArrowRight} iconPosition="right"/>
      
      </div>
      <div className='flex item-start gap-4'>
      <Badge label="Label" type="pill color" color="success" size='lg' icon={PlusIcon} iconPosition="only"/>
      <Badge label="Label" type="pill outline" color="warning" size='lg' icon={PlusIcon} iconPosition="only"/>
      <Badge label="Label" type="badge modern" color="gray" size='lg' icon={PlusIcon} iconPosition="only"/>
      <Badge label="Label" type="badge color" color="blue light" size='lg' icon={PlusIcon} iconPosition="only"/>
      
      </div>
      <div className='flex item-start gap-4'>
      <Badge label="Label" type="pill color" color="success" size='xs' icon={PlusIcon} iconPosition="only"/>
      <Badge label="Label" type="pill outline" color="warning" size='xs' icon={PlusIcon} iconPosition="only"/>
      <Badge label="Label" type="badge modern" color="gray" size='xs' icon={PlusIcon} iconPosition="only"/>
      <Badge label="Label" type="badge color" color="blue light" size='xs' icon={PlusIcon} iconPosition="only"/>
      
      </div>
      
    </div>
  )
}

export default BadgeUsageExample