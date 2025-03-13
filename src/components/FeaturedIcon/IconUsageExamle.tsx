import React from 'react'
import InfoIcon from '@icons/General/info-circle.svg'
import FeaturedIcon from '.'

const IconUsageExamle = () => {
  return (
    <div className='flex flex-col gap-2'>
    <div className='flex items-center gap-4'>
      <FeaturedIcon type="modern" size="sm" icon={InfoIcon} />
      <FeaturedIcon type="modern" size="md" icon={InfoIcon} />
      <FeaturedIcon type="modern" size="lg" icon={InfoIcon} />
      <FeaturedIcon type="modern" size="xl" icon={InfoIcon} />
    </div>
    </div>
  )
}

export default IconUsageExamle
