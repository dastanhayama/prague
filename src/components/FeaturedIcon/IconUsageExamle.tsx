import React from 'react'
import InfoIcon from '@icons/General/info-circle.svg'
import FeaturedIcon from '.'

const IconUsageExamle = () => {
  return (
    <div className='flex flex-col gap-12'>
    <div className='flex items-center gap-4'>
      <FeaturedIcon type="light" color='brand' size="xl" icon={InfoIcon} />
      <FeaturedIcon type="light" color='gray' size="xl" icon={InfoIcon} />
      <FeaturedIcon type="light" color='error' size="xl" icon={InfoIcon} />
      <FeaturedIcon type="light" color='warning' size="xl" icon={InfoIcon} />
      <FeaturedIcon type="light" color='success' size="xl" icon={InfoIcon} />
    </div>
    <div className='flex items-center gap-4'>
      <FeaturedIcon type="dark" color='brand' size="xl" icon={InfoIcon} />
      <FeaturedIcon type="dark" color='gray' size="sm" icon={InfoIcon} />
      <FeaturedIcon type="dark" color='error' size="md" icon={InfoIcon} />
      <FeaturedIcon type="dark" color='warning' size="lg" icon={InfoIcon} />
      <FeaturedIcon type="dark" color='success' size="xl" icon={InfoIcon} />
    </div>
    <div className='flex items-center gap-4'>
      <FeaturedIcon type="glass" color='brand' size="sm" icon={InfoIcon} />
      <FeaturedIcon type="glass" color='gray' size="md" icon={InfoIcon} />
      <FeaturedIcon type="glass" color='error' size="lg" icon={InfoIcon} />
      <FeaturedIcon type="glass" color='warning' size="xl" icon={InfoIcon} />
      <FeaturedIcon type="glass" color='success' size="xl" icon={InfoIcon} />
    </div>
    <div className='flex items-center gap-4'>
      <FeaturedIcon type="modern" color='brand' size="sm" icon={InfoIcon} />
      <FeaturedIcon type="modern" color='gray' size="md" icon={InfoIcon} />
      <FeaturedIcon type="modern" color='error' size="lg" icon={InfoIcon} />
      <FeaturedIcon type="modern" color='warning' size="xl" icon={InfoIcon} />
      <FeaturedIcon type="modern" color='success' size="xl" icon={InfoIcon} />
    </div>
    <div className='flex items-center gap-4'>
      <FeaturedIcon type="outline" color='brand' size="sm" icon={InfoIcon} />
      <FeaturedIcon type="outline" color='gray' size="md" icon={InfoIcon} />
      <FeaturedIcon type="outline" color='error' size="lg" icon={InfoIcon} />
      <FeaturedIcon type="outline" color='warning' size="xl" icon={InfoIcon} />
      <FeaturedIcon type="outline" color='success' size="xl" icon={InfoIcon} />
    </div>
    </div>
  )
}

export default IconUsageExamle
