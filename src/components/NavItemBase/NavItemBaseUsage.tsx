import React from 'react'
import NavItemBase from '@/components/NavItemBase'
import ChevronDownIcon from '@icons/Arrows/chevron-down.svg'
import BarChartIcon from '@icons/Charts/bar-chart-01.svg'
import Dot from '../Dot'
import Badge from '../Badge'

const NavItemBaseUsage = () => {
  return (
    <div className='flex flex-col gap-4'>
    <NavItemBase
      icon={BarChartIcon}
      dropdown={ChevronDownIcon}
      text="Dashboard"
      state="default"
      current
      dot={<Dot size='md'/>}
      badge={<Badge label='10' type='pill color' size='sm' color='gray'/>}
    />
    <NavItemBase
      icon={BarChartIcon}
      dropdown={ChevronDownIcon}
      text="Dashboard"
      dot={<Dot size='md'/>}
      badge={<Badge label='10' type='pill color' size='sm' color='gray'/>}
    />
    <NavItemBase
      icon={BarChartIcon}
      dropdown={ChevronDownIcon}
      text="Dashboard"
      state="focused"
      dot={<Dot size='md'/>}
      badge={<Badge label='10' type='pill color' size='sm' color='gray'/>}
    />
    <NavItemBase
      icon={BarChartIcon}
      dropdown={ChevronDownIcon}
      text="Dashboard"
      state="focused"
      current
      dot={<Dot size='md'/>}
      badge={<Badge label='10' type='pill color' size='sm' color='gray'/>}
    />
    </div>
  )
}

export default NavItemBaseUsage