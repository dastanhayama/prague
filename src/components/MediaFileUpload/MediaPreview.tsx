'use client'

import { useState, useEffect } from 'react'
import BinIcon from '@icons/General/trash-01.svg'
import AlertIcon from '@icons/Alerts&Feedback/alert-circle.svg'
import CloseIcon from '@icons/General/x-close.svg'
import { FileWithPreview } from './index' // Import the type from the main component

const LoaderIcon = ({ onCancel }: { onCancel: () => void }) => (
  <div className="relative flex items-center justify-center w-[48px] h-[48px] rounded-full">
    <svg className="animate-spin" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="4" />
      <path d="M12 2C6.47715 2 2 6.47715 2 12" stroke="#344054" strokeWidth="4" strokeLinecap="round" />
    </svg>
    <button
      onClick={(e) => {
        e.stopPropagation()
        onCancel()
      }}
      className="absolute flex items-center justify-center bg-white rounded-full w-auto h-auto cursor-pointer"
    >
      <CloseIcon className="w-[20px] h-[20px]" />
    </button>
  </div>
)

interface MediaPreviewProps {
  files: FileWithPreview[]
  onRemoveFile: (file: FileWithPreview) => void
  onCancelUpload: (file: FileWithPreview) => void // Add onCancelUpload prop
  disabled?: boolean
}

// Define CSS classes as constants
const container_class = 'mt-4 w-full flex flex-wrap gap-2 justify-start'
const file_container_class = (isError: boolean) =>
  `relative ${isError ? 'border-2 border-error-solid rounded-xl cursor-pointer' : ''}`
const loader_container_class =
  'w-[166px] h-[166px] bg-primary rounded-xl flex items-center justify-center border border-secondary'
const preview_container_class = (isError: boolean, isDisabled: boolean, isActive: boolean) =>
  `relative w-[166px] h-[166px] bg-cover bg-center rounded-xl flex items-center justify-center cursor-pointer group ${
    isError ? 'bg-primary' : 'bg-tertiary'
  } ${isDisabled ? 'opacity-40' : ''} ${
    isActive && !isError ? 'outline outline-2 outline-brand-solid-primary' : '' // Disable active state for error component
  }`
const overlay_class =
  'absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-20 group-active:opacity-30 rounded-xl pointer-events-none'
const alert_icon_container_class = 'absolute top-0 right-0 p-md'
const alert_icon_class = 'w-[24px] h-[24px] [&>path]:stroke-error-solid'
const delete_button_class =
  'flex items-center justify-center w-[40px] h-[40px] bg-primary rounded-md p-[10px] border border-[#D0D5DD] z-10 focus:ring-2 focus:ring-[#98A2B324] active:bg-black active:opacity-30'
const bin_icon_class = 'w-[20px] h-[20px]'

export default function MediaPreview({ files, onRemoveFile, onCancelUpload, disabled = false }: MediaPreviewProps) {
  const [activeFile, setActiveFile] = useState<FileWithPreview | null>(null) // Track the active file

  // Cleanup preview URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      files.forEach((file) => {
        if (file.preview && typeof file.preview === 'string' && !file.url) {
          URL.revokeObjectURL(file.preview)
        }
      })
    }
  }, [files])

  // Handle file click to set active state
  const handleFileClick = (file: FileWithPreview) => {
    if (disabled || !file.isValid || file.status === 'error') return // Prevent error component from changing state
    setActiveFile((prev) => (prev === file ? null : file))
  }

  return (
    <div className={container_class}>
      {files.map((file, index) => (
        <div
          key={index}
          className={file_container_class(!file.isValid || file.status === 'error')}
          onClick={() => handleFileClick(file)} // Set active file on click
        >
          {file.status === 'loading' ? (
            <div className={loader_container_class}>
              <LoaderIcon onCancel={() => onCancelUpload(file)} /> {/* Pass the file to onCancelUpload */}
            </div>
          ) : (
            <div
              className={preview_container_class(!file.isValid || file.status === 'error', disabled, activeFile === file)}
              style={{
                backgroundImage: file.preview ? `url(${file.preview})` : '',
                backgroundSize: 'cover',
              }}
            >
              {/* Overlay */}
              <div className={overlay_class}></div>

              {/* Show alert icon when file is invalid or has error */}
              {(!file.isValid || file.status === 'error') && (
                <div className={alert_icon_container_class}>
                  <AlertIcon stroke="#D92D20" className={alert_icon_class} /> {/* Set stroke color to #D92D20 */}
                </div>
              )}

              {/* Delete button */}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  onRemoveFile(file)
                }}
                className={delete_button_class}
                disabled={disabled} // Disable button for error component
              >
                <BinIcon className={bin_icon_class} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}