// MediaFileUpload.tsx
'use client'

import { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import UploadIcon from '@icons/General/upload-cloud-02.svg'
import MediaPreview from './MediaPreview' // Import the new component



interface MediaUploadProps {
  multiple: boolean
  accept: string[]
  maxSize: number
  onChange?: (files: any[]) => void
}

interface UploadResponse {
  docs: any[]
  errors: string[]
}

export interface FileWithPreview extends File {
  preview?: string
  isValid?: boolean
  id?: string
  status?: 'loading' | 'success' | 'error'
  error?: string
  url?: string
}

export default function MediaFileUpload({ 
  multiple, 
  accept, 
  maxSize,
  onChange
}: MediaUploadProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [files, setFiles] = useState<FileWithPreview[]>([]) // State to track uploaded files with preview
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]) // State to track successfully uploaded files

  useEffect(() => {
    // Call onChange when uploadedFiles changes
    if (onChange) {
      onChange(uploadedFiles);
    }
  }, [uploadedFiles, onChange]);

  const validateFile = (file: File): string | null => {
    const fileSizeMB = file.size / (1024 * 1024)
    if (!accept.includes(file.type)) return 'Invalid file format.'
    if (fileSizeMB > maxSize) return `File size exceeds ${maxSize / (1024 * 1024)}MB limit.`
    return null
  }

  // Update file status after upload
  const updateFileStatus = (file: FileWithPreview, status: 'success' | 'error', uploadedFile?: any, error?: string) => {
    setFiles(prevFiles => 
      prevFiles.map(f => {
        if (f === file) {
          return {
            ...f,
            status,
            ...(uploadedFile ? { 
              id: uploadedFile.id,
              url: uploadedFile.url,
              preview: uploadedFile.url || f.preview
            } : {}),
            ...(error ? { error } : {})
          }
        }
        return f
      })
    )
  }

  // Function to remove a file
  const removeFile = (fileToRemove: FileWithPreview) => {
    setFiles(prevFiles => prevFiles.filter(file => file !== fileToRemove))
    
    // If the file has an ID (was uploaded), you might want to delete it from the server
    if (fileToRemove.id) {
      deleteFileFromPayload(fileToRemove.id)
    }
  }

  // Function to delete file from Payload
  const deleteFileFromPayload = async (fileId: string) => {
    try {
      const response = await fetch(`/api/media/${fileId}`, {
        method: 'DELETE',
      })
      
      if (!response.ok) {
        console.error('Failed to delete file from server')
      } else {
        // Remove from uploadedFiles state
        setUploadedFiles(prev => prev.filter(file => file.id !== fileId))
      }
    } catch (error) {
      console.error('Error deleting file:', error)
    }
  }

  // Function to upload files to Payload CMS
  const uploadToPayload = async (fileToUpload: FileWithPreview) => {
   
    try {
      const formData = new FormData()
      formData.append('media', fileToUpload)

      // Make the request to the local Payload API
      const response = await fetch('/api/media', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorText = await response.text()
        updateFileStatus(fileToUpload, 'error', undefined, `Upload failed: ${errorText}`)
        throw new Error(`Upload failed: ${errorText}`)
      }

      const result: UploadResponse = await response.json()

      // Handle successful uploads
      if (result.docs && result.docs.length > 0) {
        const uploadedFile = result.docs[0]
        updateFileStatus(fileToUpload, 'success', uploadedFile)
        setUploadedFiles(prev => [...prev, uploadedFile])
        return uploadedFile
      }

      // Handle any errors returned from the API
      if (result.errors && result.errors.length > 0) {
        const error = result.errors[0]
        updateFileStatus(fileToUpload, 'error', undefined, error)
        throw new Error(error)
      }

      return null
    } catch (error) {
      updateFileStatus(fileToUpload, 'error', undefined, error instanceof Error ? error.message : String(error))
      console.error('Upload error:', error)
      return null
    }
  }

  const onDrop = useCallback(
    async (acceptedFiles: File[], fileRejections: any[]) => {
      // Process accepted files
      const newFiles = acceptedFiles.map(file => {
        const error = validateFile(file)
        const preview = URL.createObjectURL(file)
        
        return Object.assign(file, {
          preview,
          isValid: !error,
          status: 'loading' as const,
          error: error || undefined
        })
      })

      // Process rejected files
      const rejectedFiles = fileRejections.map(rejection => {
        const { file } = rejection
        const errorMsg = rejection.errors.map((e: any) => e.message).join(', ')
        
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
          isValid: false,
          status: 'error' as const,
          error: errorMsg
        })
      })

      // Combine and update files state
      const allNewFiles = [...newFiles, ...rejectedFiles]
      
      // In single file mode, replace existing files
      if (!multiple) {
        setFiles(allNewFiles)
        setUploadedFiles([]) // Clear previously uploaded files
      } else {
        setFiles(prev => [...prev, ...allNewFiles])
      }

      // Upload valid files one by one
      setIsLoading(true)
      for (const file of newFiles) {
        if (file.isValid) {
          await uploadToPayload(file)
        }
      }
      setIsLoading(false)
    },
    [accept, maxSize, multiple]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
    multiple,
    maxSize: maxSize * 1024 * 1024, // Convert MB to bytes
  })

  const container_class = `py-xl px-3xl rounded-xl text-center cursor-pointer max-w-[512px] w-full h-auto flex flex-col justify-start items-center ${isDragActive ? 'border-brand-solid border-2' : 'border-secondary border'}`
  const upload_icon_container_class = `flex items-center justify-center w-[40px] h-[40px] bg-primary rounded-md p-[10px] border border-secondary mb-3`
  const upload_icon_class = `w-[20px] h-[20px]`
  const text_container_class = `flex flex-col gap-1`
  const main_text_class = `font-semibold text-[#A80B48] text-sm leading-5`
  const main_text_span_class = `font-normal text-[#475467]`
  const sub_text_class = `font-normal text-[#475467] text-[12px] leading-[18px]`

  return (
    <>
      <div {...getRootProps()} className={container_class}>
        <input {...getInputProps()} />
        <div className={upload_icon_container_class}>
          <UploadIcon className={upload_icon_class} />
        </div>
        <div className={text_container_class}>
          <p className={main_text_class}>
            Click to upload <span className={main_text_span_class}>or drag and drop</span>
          </p>
          <p className={sub_text_class}>SVG, PNG, JPG or GIF (max. {maxSize / (1024 * 1024)}MB)</p>
        </div>
      </div>

      {/* Media preview section */}
      <MediaPreview files={files} onRemoveFile={removeFile} />
    </>
  )
}