import React from 'react'
import ButtonUtility from '.'
import PlaceholderIcon from '@icons/General/placeholder.svg'

const ButtonUtilityUsage = () => {
  return (
    <div className='flex flex-col gap-4'>
        <ButtonUtility icon={PlaceholderIcon} size='sm' hierarchy='secondary'/>
        <ButtonUtility icon={PlaceholderIcon} size='sm' hierarchy='secondary' state='focused'/>
        <ButtonUtility icon={PlaceholderIcon} size='sm' hierarchy='secondary' disabled/>
        <ButtonUtility icon={PlaceholderIcon} size='sm' hierarchy='tertiary'/>
        <ButtonUtility icon={PlaceholderIcon} size='sm' hierarchy='tertiary' state='focused'/>
        <ButtonUtility icon={PlaceholderIcon} size='sm' hierarchy='tertiary'  disabled/>
    </div>
  )
}

export default ButtonUtilityUsage