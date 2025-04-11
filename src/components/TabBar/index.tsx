import React from 'react'

interface TabBarProps {
    type: 'sticky' | 'floating'
    blur?: boolean
    children?: React.ReactNode
}

const TabBar: React.FC<TabBarProps> = ({ type = 'sticky', blur = false, children }) => {
    // Base classes
    const containerClasses = 'w-full fixed bottom-0 left-0 flex tablet:hidden flex-col gap-0 z-10'
    const typeSpecificContainerClasses = type === 'floating' 
        ? 'px-xl border-none' 
        : 'border border-[#F2F4F7]'

    // Main content classes
    const contentBaseClasses = 'flex gap-0 w-full border-none'
    const blurClass = blur ? 'bg-primary/80 backdrop-blur-[24px]' : 'bg-primary'
    const typeSpecificContentClasses = type === 'sticky' 
        ? 'px-md pt-md pb-0 rounded-none' 
        : 'px-md py-xl rounded-2xl'

    // Bottom spacer classes
    const spacerBaseClass = 'w-full h-[34px]'
    const spacerColorClass = 
    type === 'sticky' 
      ? (blur ? 'bg-primary/80' : 'bg-primary')
      : 'bg-transparent';

    return (
        <div className={`${containerClasses} ${typeSpecificContainerClasses}`}>
            <div className={`${contentBaseClasses} ${blurClass} ${typeSpecificContentClasses}`}>
                {children}
            </div>
            <div className={`${spacerBaseClass} ${spacerColorClass}`} />
        </div>
    )
}

export default TabBar