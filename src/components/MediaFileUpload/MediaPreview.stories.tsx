import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import MediaPreview from './MediaPreview'
import { FileWithPreview } from './index' // Import the type from the main component

// Define mock files for different states
const mockFiles: FileWithPreview[] = [
  {
    name: 'mockfile.png',
    preview:
      'https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    isValid: true,
    status: 'loading',
    lastModified: Date.now(),
    webkitRelativePath: '',
    size: 1024,
    type: 'image/png',
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
    slice: () => new Blob(),
    stream: () => new ReadableStream(),
    text: () => Promise.resolve(''),
    bytes: () => Promise.resolve(new Uint8Array()), // Updated to return a Promise<Uint8Array>
  },
  {
    name: 'mockfile.png',
    preview:
      'https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    isValid: true,
    status: 'success',
    url: 'https://via.placeholder.com/150',
    lastModified: Date.now(),
    webkitRelativePath: '',
    size: 1024,
    type: 'image/png',
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
    slice: () => new Blob(),
    stream: () => new ReadableStream(),
    text: () => Promise.resolve(''),
    bytes: () => Promise.resolve(new Uint8Array()), // Updated to return a Promise<Uint8Array>
  },
  {
    name: 'mockfile.png',
    preview: 'https://via.placeholder.com/150',
    isValid: false,
    status: 'error',
    error: 'Invalid file format.',
    lastModified: Date.now(),
    webkitRelativePath: '',
    size: 1024,
    type: 'image/png',
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
    slice: () => new Blob(),
    stream: () => new ReadableStream(),
    text: () => Promise.resolve(''),
    bytes: () => Promise.resolve(new Uint8Array()), // Updated to return a Promise<Uint8Array>
  },
]

// Define the meta for the component
const meta: Meta<typeof MediaPreview> = {
  title: 'Components/Media Item',
  component: MediaPreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    files: { control: 'object' },
    onRemoveFile: { action: 'fileRemoved' },
    onCancelUpload: { action: 'uploadCancelled' },
  },
}

export default meta
type Story = StoryObj<typeof MediaPreview>

// Preloading state
export const Preloading: Story = {
  args: {
    files: [mockFiles[1]], // Loading file
    preloading: true,
    onRemoveFile: fn(),
    onCancelUpload: fn(),
  },
}

// Enabled/Success state
export const EnabledSuccess: Story = {
  args: {
    files: [mockFiles[1]], // Success file
    enabled: true,
    onRemoveFile: fn(),
    onCancelUpload: fn(),
  },
}

// // Hover state (simulated with a decorator)
// export const Hover: Story = {
//   args: {
//     files: [mockFiles[1]], // Success file
//     hover: true,
//     onRemoveFile: fn(),
//     onCancelUpload: fn(),
//   },
//   parameters: {
//     pseudo: { hover: true }, // Simulate hover state
//   },
// };

// Active state
export const Active: Story = {
  args: {
    files: [mockFiles[1]], // Success file
    active: true,
    onRemoveFile: fn(),
    onCancelUpload: fn(),
  },
  parameters: {
    pseudo: { active: true }, // Simulate active state
  },
}

// Pressed state
// export const Pressed: Story = {
//   args: {
//     files: [mockFiles[1]], // Success file
//     pressed: true,
//     onRemoveFile: fn(),
//     onCancelUpload: fn(),
//   },
//   parameters: {
//     pseudo: { active: true, hover: true }, // Simulate pressed state
//   },
// };

// Focus state
// export const Focus: Story = {
//   args: {
//     files: [mockFiles[1]], // Success file
//     focus: true,
//     onRemoveFile: fn(),
//     onCancelUpload: fn(),
//   },
//   parameters: {
//     pseudo: { focus: true }, // Simulate focus state
//   },
// };

// Loading state
export const Loading: Story = {
  args: {
    files: [mockFiles[0]], // Loading file
    loading: true,
    onRemoveFile: fn(),
    onCancelUpload: fn(),
  },
}

// Error state
export const Error: Story = {
  args: {
    files: [mockFiles[2]], // Error file
    error: true,
    onRemoveFile: fn(),
    onCancelUpload: fn(),
  },
}

// Disabled state
export const Disabled: Story = {
  args: {
    files: [mockFiles[1]], // Success file
    onRemoveFile: fn(),
    onCancelUpload: fn(),
    disabled: true, // Disable the component
  },
}
