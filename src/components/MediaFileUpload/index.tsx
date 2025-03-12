'use client'

import { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import UploadIcon from '@icons/General/upload-cloud-02.svg'
import MediaPreview from './MediaPreview'

export interface MediaUploadProps {
  multiple: boolean
  accept: string[]
  maxSize: number
  onChange?: (files: any[]) => void
  disabled?: boolean // Add disabled prop
  hovered?: boolean // Add disabled prop
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
  onChange,
  disabled,
  hovered,
}: MediaUploadProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([])
  const [abortControllers, setAbortControllers] = useState<{ [key: string]: AbortController }>({})

  useEffect(() => {
    if (onChange) {
      onChange(uploadedFiles)
    }
  }, [uploadedFiles, onChange])

  const validateFile = (file: File): string | null => {
    const fileSizeMB = file.size / (1024 * 1024)
    if (!accept.includes(file.type)) return 'Invalid file format.'
    if (fileSizeMB > maxSize) return `File size exceeds ${maxSize / (1024 * 1024)}MB limit.`
    return null
  }

  const onError = (error: any) => {
    alert(error instanceof Error ? error.message : String(error))
  }

  const updateFileStatus = (
    file: FileWithPreview,
    status: 'success' | 'error',
    uploadedFile?: any,
    error?: string,
  ) => {
    setFiles((prevFiles) =>
      prevFiles.map((f) => {
        if (f === file) {
          return {
            ...f,
            status,
            ...(uploadedFile
              ? {
                  id: uploadedFile.id,
                  url: uploadedFile.url,
                  preview: uploadedFile.url || f.preview,
                }
              : {}),
            ...(error ? { error } : {}),
          }
        }
        return f
      }),
    )
  }

  const removeFile = (fileToRemove: FileWithPreview) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove))
    if (fileToRemove.id) {
      deleteFileFromPayload(fileToRemove.id)
    }
  }

  const deleteFileFromPayload = async (fileId: string) => {
    try {
      const response = await fetch(`/api/media/${fileId}`, {
        method: 'DELETE',
      })
      if (!response.ok) {
        const errorText = await response.text()
        onError(`Failed to delete file from server: ${errorText}`)
      } else {
        setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId))
      }
    } catch (error) {
      onError(`Error deleting file: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  const uploadToPayload = async (
    fileToUpload: FileWithPreview,
    abortController: AbortController,
  ) => {
    try {
      const formData = new FormData()
      formData.append('media', fileToUpload)
      const response = await fetch('/api/media', {
        method: 'POST',
        body: formData,
        signal: abortController.signal,
      })
      if (!response.ok) {
        const errorText = await response.text()
        const errorMessage = `Upload failed: ${errorText}`
        updateFileStatus(fileToUpload, 'error', undefined, errorMessage)
        throw new Error(errorMessage)
      }
      const result: UploadResponse = await response.json()
      if (result.docs && result.docs.length > 0) {
        const uploadedFile = result.docs[0]
        updateFileStatus(fileToUpload, 'success', uploadedFile)
        setUploadedFiles((prev) => [...prev, uploadedFile])
        return uploadedFile
      }
      if (result.errors && result.errors.length > 0) {
        const error = result.errors[0]
        updateFileStatus(fileToUpload, 'error', undefined, error)
        throw new Error(error)
      }
      return null
    } catch (error: any) {
      if (error.name === 'AbortError') {
        onError('Upload was cancelled')
      } else {
        const errorMessage = error instanceof Error ? error.message : String(error)
        updateFileStatus(fileToUpload, 'error', undefined, errorMessage)
        onError(errorMessage)
      }
      return null
    }
  }

  const cancelUpload = (file: FileWithPreview) => {
    const abortController = abortControllers[file.name]
    if (abortController) {
      abortController.abort()
      setAbortControllers((prev) => {
        const newControllers = { ...prev }
        delete newControllers[file.name]
        return newControllers
      })
      setFiles((prevFiles) => prevFiles.filter((f) => f !== file))
    }
  }

  const onDrop = useCallback(
    async (acceptedFiles: File[], fileRejections: any[]) => {
      if (disabled) return // Do nothing if disabled

      const newFiles = acceptedFiles.map((file) => {
        const error = validateFile(file)
        const preview = URL.createObjectURL(file)
        return Object.assign(file, {
          preview,
          isValid: !error,
          status: 'loading' as const,
          error: error || undefined,
        })
      })

      const rejectedFiles = fileRejections.map((rejection) => {
        const { file } = rejection
        const errorMsg = rejection.errors.map((e: any) => e.message).join(', ')
        onError(`File "${file.name}" was rejected: ${errorMsg}`)
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
          isValid: false,
          status: 'error' as const,
          error: errorMsg,
        })
      })

      const allNewFiles = [...newFiles, ...rejectedFiles]
      if (!multiple) {
        setFiles(allNewFiles)
        setUploadedFiles([])
      } else {
        setFiles((prev) => [...prev, ...allNewFiles])
      }

      setIsLoading(true)
      try {
        for (const file of newFiles) {
          if (file.isValid) {
            const abortController = new AbortController()
            setAbortControllers((prev) => ({ ...prev, [file.name]: abortController }))
            await uploadToPayload(file, abortController)
          }
        }
      } catch (error) {
        onError(`Upload process failed: ${error instanceof Error ? error.message : String(error)}`)
      } finally {
        setIsLoading(false)
      }
    },
    [accept, maxSize, multiple, disabled],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
    multiple,
    maxSize: maxSize,
    disabled, // Disable dropzone if the component is disabled
  })

  const formatAcceptedFormats = (accept: string[]): string => {
    const formatted = accept.map((type) => type.split('/')[1].toUpperCase())
    return formatted.length > 1
      ? formatted.slice(0, -1).join(', ') + ' or ' + formatted[formatted.length - 1]
      : formatted[0]
  }

  const acceptedFormats = formatAcceptedFormats(accept)

  const container_class = `py-xl px-3xl rounded-xl text-center cursor-pointer max-w-[512px] w-full h-auto flex flex-col justify-start items-center hover:border-brand-solid hover:border-2 ${
    isDragActive || hovered ? 'border-brand-solid border-2' : 'border-secondary border'
  } ${disabled ? 'cursor-not-allowed bg-[#F9FAFB] border-none' : 'bg-primary'}`

  const upload_icon_container_class = `flex items-center justify-center w-[40px] h-[40px] bg-primary rounded-md p-[10px] border border-secondary mb-3`
  const upload_icon_class = `w-[20px] h-[20px]`
  const text_container_class = `flex flex-col gap-1`
  const main_text_class = `font-semibold  text-sm leading-5 ${disabled ? 'text-[#98A2B3]' : 'text-[#A80B48]'}`
  const main_text_span_class = `font-normal text-[#475467]`
  const sub_text_class = `font-normal text-[#475467] text-[12px] leading-[18px]`

  return (
    <>
      <div {...getRootProps()} className={container_class}>
        <input {...getInputProps()} disabled={disabled} />
        <div className={upload_icon_container_class}>
          <UploadIcon className={upload_icon_class} />
        </div>
        <div className={text_container_class}>
          <p className={main_text_class}>
            Click to upload <span className={main_text_span_class}>or drag and drop</span>
          </p>
          <p className={sub_text_class}>
            {acceptedFormats} (max. {maxSize / (1024 * 1024)}MB)
          </p>
        </div>
      </div>

      {/* Media preview section */}
      <MediaPreview files={files} onRemoveFile={removeFile} onCancelUpload={cancelUpload} />
    </>
  )
}
