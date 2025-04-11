import React from 'react'

interface TabProps {
    active?: boolean
    caption?: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    marker?: React.ReactNode
    onClick?: () => void
}

const Tab: React.FC<TabProps> = ({ icon: Icon, active = false, caption, marker, onClick }) => {
    // Base classes
    const containerClasses = 'flex flex-col justify-center items-center gap-xs w-full cursor-pointer'
    const iconContainerClasses = 'w-[38px] h-full max-w-[38px] relative flex justify-center items-center'
    const markerContainerClasses = 'absolute -top-[9px] right-[1px]'
    
    // Conditional classes
    const iconClasses = `w-[24px] h-[24px] ${active ? '[&>path]:stroke-[#C00C53]' : '[&>path]:stroke-[#667085]'}`
    const captionClasses = `text-[10px] leading-[12px] font-[500] ${active ? 'text-[#C00C53]' : 'text-[#667085]'}`

    return (
        <div className={containerClasses} onClick={onClick}>
            <div className={iconContainerClasses}>
                <Icon className={iconClasses} />
                <div className={markerContainerClasses}>
                    {marker}
                </div>
            </div>
            {caption && <p className={captionClasses}>{caption}</p>}
        </div>
    )
}

export default Tab