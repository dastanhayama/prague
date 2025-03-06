// MediaPreview.tsx
'use client'

import { useEffect } from 'react'
import BinIcon from '@icons/General/trash-01.svg'
import AlertIcon from '@icons/Alerts&Feedback/alert-circle.svg'
import { FileWithPreview } from './index' // Import the type from the main component

const LoaderIcon = () => (
  <svg className="animate-spin" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#E5E7EB" strokeWidth="4" />
    <path d="M12 2C6.47715 2 2 6.47715 2 12" stroke="#344054" strokeWidth="4" strokeLinecap="round" />
  </svg>
)

interface MediaPreviewProps {
  files: FileWithPreview[]
  onRemoveFile: (file: FileWithPreview) => void
}

// Define CSS classes as constants
const container_class = "mt-4 w-full flex flex-wrap gap-2 justify-start"
const file_container_class = (isError: boolean) =>
  `relative ${isError ? "border-2 border-[#D92D20] rounded-[12px] cursor-pointer" : ""}`
const loader_container_class = "w-[166px] h-[166px] bg-primary rounded-[12px] flex items-center justify-center border border-[#EAECF0]"
const preview_container_class = (isError: boolean) =>
  `relative w-[166px] h-[166px] bg-cover bg-center rounded-[12px] flex items-center justify-center cursor-pointer group ${
    isError ? "bg-primary" : "bg-[#F2F4F7]"
  }`
const overlay_class = "absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-20 rounded-[12px] pointer-events-none"
const alert_icon_container_class = "absolute top-0 right-0 p-2"
const alert_icon_class = "w-[24px] h-[24px]"
const delete_button_class =
  "flex items-center justify-center w-[40px] h-[40px] bg-primary rounded-[8px] p-[10px] border border-[#D0D5DD] z-10 group-hover:border-transparent focus:outline-none focus:ring-2 focus:ring-[#98A2B324] active:bg-black active:opacity-30"
const bin_icon_class = "w-[20px] h-[20px]"

export default function MediaPreview({ files, onRemoveFile }: MediaPreviewProps) {
  // Cleanup preview URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      files.forEach(file => {
        if (file.preview && typeof file.preview === 'string' && !file.url) {
          URL.revokeObjectURL(file.preview)
        }
      })
    }
  }, [files])

  return (
    <div className={container_class}>
      {files.map((file, index) => (
        <div
          key={index}
          className={file_container_class(!file.isValid || file.status === 'error')}>
          {file.status === 'loading' ? (
            <div className={loader_container_class}>
              <LoaderIcon />
            </div>
          ) : (
            <div
              className={preview_container_class(!file.isValid || file.status === 'error')}
              style={{
                backgroundImage: file.preview ? `url(${file.preview})` : "",
                backgroundSize: 'cover',
              }}>
              {/* Overlay */}
              <div className={overlay_class}></div>
              
              {/* Show alert icon when file is invalid or has error */}
              {(!file.isValid || file.status === 'error') && (
                <div className={alert_icon_container_class}>
                  <AlertIcon stroke="#D92D20" className={alert_icon_class} />
                </div>
              )}
              
              {/* Delete button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onRemoveFile(file)
                }}
                className={delete_button_class}>
                <BinIcon className={bin_icon_class} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}