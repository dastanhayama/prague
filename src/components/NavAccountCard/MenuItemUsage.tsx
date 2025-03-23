import React from 'react'
import PlaceholderIcon from '@icons/General/placeholder.svg'
import MenuItem from './MenuItem'
import Dot from '../Dot'

const MenuItemUsage = () => {
  return (
    <div className='flex flex-col gap-4'>
        <MenuItem
            icon={PlaceholderIcon}
            dot={<Dot size='md' />}
            shortcut='⌘K->P'
            placeholder='Placeholder'
            current={true}
            type='menu item'
        />
        <MenuItem
            icon={PlaceholderIcon}
            dot={<Dot size='md' />}
            shortcut='⌘K->P'
            placeholder='Placeholder'
            current={false}
            type='menu item'

        />
        <MenuItem
            icon={PlaceholderIcon}
            dot={<Dot size='md' />}
            shortcut='⌘K->P'
            placeholder='Placeholder'
            current={true}
            type='account'

        />
        <MenuItem
            icon={PlaceholderIcon}
            dot={<Dot size='md' />}
            shortcut='⌘K->P'
            placeholder='Placeholder'
            current={false}
            type='account'

        />
    </div>
  )
}

export default MenuItemUsage