import React, { useMemo } from 'react'
import NavItemBase from '@/components/NavItemBase'
import NavAccountCard from '@/components/NavAccountCard'
import { getIconComponent } from '@icons/icons'
import { IconName } from '@icons/icons'
import Logo from '@/components/Logo'

export interface MenuItem {
  title: string
  link: string
  icon: IconName
  is_divider: boolean
  order: number
  current?: boolean
}

export interface SidebarMenuProps {
  docs: MenuItem[]
  header?: React.ReactNode
  footer?: React.ReactNode
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ docs, header, footer }) => {
  // Sort and memoize the menu items to prevent unnecessary re-renders
  const sortedMenuItems = useMemo(() => {
    return [...docs].sort((a, b) => a.order - b.order)
  }, [docs])

  // Group items by dividers
  const groupedMenuItems = useMemo(() => {
    const groups: MenuItem[][] = [[]]

    sortedMenuItems.forEach((item) => {
      if (item.is_divider) {
        groups.push([])
      } else {
        groups[groups.length - 1].push(item)
      }
    })

    return groups.filter((group) => group.length > 0)
  }, [sortedMenuItems])

  return (
    <div className="h-screen w-[280px] max-w-[280px]  fixed left-0 top-0 p-xs">
      <div className="flex flex-col bg-primary  border border-[#EAECF0] rounded-xl w-full h-full">
        {/* Header with logo and company name */}
        <div className="flex items-center px-3xl py-2xl w-auto h-auto">
          {header}
        </div>

        {/* Navigation sections */}
        <div className="flex-1 overflow-y-auto px-xl">
          {groupedMenuItems.map((group, groupIndex) => (
            <div key={groupIndex}>
              {group.map((item) => {
                const IconComponent = getIconComponent(item.icon)
                return (
                  <NavItemBase
                    key={`${item.link}-${item.order}`}
                    text={item.title}
                    icon={IconComponent}
                    current={item.current}
                  />
                )
              })}
              {groupIndex < groupedMenuItems.length - 1 && (
                <div className="h-[1px] bg-[#EAECF0] px-2xl my-md"></div>
              )}
            </div>
          ))}
        </div>

        {/* Footer with account card */}
        <div className="p-xl">
          {footer}
        </div>
      </div>
    </div>
  )
}

export default SidebarMenu
