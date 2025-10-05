'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { FiX, FiImage } from 'react-icons/fi';

interface ImageUploadProps {
  value?: string;
  onChange: (url: string) => void;
  onError?: (error: string) => void;
  className?: string;
  disabled?: boolean;
}

export default function ImageUpload({
  value,
  onChange,
  onError,
  className = '',
  disabled = false,
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(value || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      onError?.(
        'Invalid file type. Only JPEG, PNG, and WebP images are allowed.'
      );
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      onError?.('File too large. Maximum size is 5MB.');
      return;
    }

    setIsUploading(true);

    try {
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);

      // Upload file
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/admin/upload/image', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        onChange(result.url);
        setPreview(result.url);
      } else {
        throw new Error(result.error || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      onError?.(
        error instanceof Error ? error.message : 'Failed to upload image'
      );
      setPreview(null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    onChange('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleClick = () => {
    if (!disabled && !isUploading) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/webp"
        onChange={handleFileSelect}
        className="hidden"
        disabled={disabled || isUploading}
      />

      {preview ? (
        <div className="relative">
          <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gray-100">
            <Image src={preview} alt="Preview" fill className="object-cover" />
            {!disabled && (
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white transition-colors hover:bg-red-600"
                disabled={isUploading}
              >
                <FiX className="h-4 w-4" />
              </button>
            )}
          </div>
          {isUploading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="flex items-center space-x-2 rounded-lg bg-white p-4">
                <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-blue-600"></div>
                <span className="text-sm text-gray-700">Uploading...</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          onClick={handleClick}
          className={`
            flex h-48 w-full cursor-pointer flex-col items-center
            justify-center space-y-2 rounded-lg border-2 border-dashed
            border-gray-300 transition-colors hover:border-gray-400
            ${disabled || isUploading ? 'cursor-not-allowed opacity-50' : ''}
          `}
        >
          {isUploading ? (
            <div className="flex flex-col items-center space-y-2">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
              <span className="text-sm text-gray-600">Uploading...</span>
            </div>
          ) : (
            <>
              <FiImage className="h-8 w-8 text-gray-400" />
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Click to upload an image
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  PNG, JPG, WebP up to 5MB
                </p>
              </div>
            </>
          )}
        </div>
      )}

      {value && (
        <div className="text-xs text-gray-500">
          Current image: {value.split('/').pop()}
        </div>
      )}
    </div>
  );
}
