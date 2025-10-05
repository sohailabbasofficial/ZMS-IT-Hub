'use client';

import { useState, useRef } from 'react';
import { FiUpload, FiX, FiImage } from 'react-icons/fi';

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

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      onError?.('Invalid file type. Only JPEG, PNG, and WebP images are allowed.');
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
          <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            {!disabled && (
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                disabled={isUploading}
              >
                <FiX className="w-4 h-4" />
              </button>
            )}
          </div>
          {isUploading && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-4 flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                <span className="text-sm text-gray-700">Uploading...</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          onClick={handleClick}
          className={`
            w-full h-48 border-2 border-dashed border-gray-300 rounded-lg
            flex flex-col items-center justify-center space-y-2
            cursor-pointer hover:border-gray-400 transition-colors
            ${disabled || isUploading ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {isUploading ? (
            <div className="flex flex-col items-center space-y-2">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="text-sm text-gray-600">Uploading...</span>
            </div>
          ) : (
            <>
              <FiImage className="w-8 h-8 text-gray-400" />
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Click to upload an image
                </p>
                <p className="text-xs text-gray-500 mt-1">
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
