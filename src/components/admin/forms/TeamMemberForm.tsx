'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { teamMemberSchema, TeamMemberInput } from '@/lib/validations';
import { FiSave, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import ImageUpload from '@/components/admin/ui/ImageUpload';

interface TeamMemberFormProps {
  initialData?: Partial<TeamMemberInput>;
  isEditing?: boolean;
  memberId?: string;
}

export default function TeamMemberForm({
  initialData,
  isEditing = false,
  memberId,
}: TeamMemberFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || '');
  const [uploadError, setUploadError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeamMemberInput>({
    resolver: zodResolver(teamMemberSchema),
    defaultValues: {
      name: initialData?.name || '',
      position: initialData?.position || '',
      bio: initialData?.bio || '',
      imageUrl: initialData?.imageUrl || '',
      linkedinUrl: initialData?.linkedinUrl || '',
      email: initialData?.email || '',
      phone: initialData?.phone || '',
      isFounder: initialData?.isFounder ?? false,
      displayOrder: initialData?.displayOrder ?? 0,
      isActive: initialData?.isActive ?? true,
    },
  });

  const onSubmit = async (data: TeamMemberInput) => {
    setIsLoading(true);
    setUploadError(null);

    try {
      const url = isEditing ? `/api/admin/team/${memberId}` : '/api/admin/team';
      const method = isEditing ? 'PUT' : 'POST';

      // Include the uploaded image URL in the data
      const formData = {
        ...data,
        imageUrl: imageUrl,
      };

      console.log('Form submission data:', formData);
      console.log('Submitting to URL:', url);

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include', // Include cookies for authentication
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        router.push('/admin/team');
      } else {
        const error = await response.json();
        console.error('API Error:', error);
        
        if (error.details) {
          alert(`Validation Error: ${error.details}`);
        } else {
          alert(error.error || 'Failed to save team member');
        }
      }
    } catch (error) {
      console.error('Error saving team member:', error);
      alert('Error saving team member');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/admin/team"
            className="text-gray-400 hover:text-gray-600"
          >
            <FiArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            {isEditing ? 'Edit Team Member' : 'Add Team Member'}
          </h1>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="rounded-lg bg-white p-6 shadow">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name *
              </label>
              <input
                {...register('name')}
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Enter full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Position */}
            <div>
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700"
              >
                Position *
              </label>
              <input
                {...register('position')}
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Enter job position"
              />
              {errors.position && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.position.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Enter email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                {...register('phone')}
                type="tel"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Enter phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Image Upload */}
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Image
              </label>
              <ImageUpload
                value={imageUrl}
                onChange={setImageUrl}
                onError={setUploadError}
                disabled={isLoading}
              />
              {uploadError && (
                <p className="mt-2 text-sm text-red-600">{uploadError}</p>
              )}
            </div>

            {/* LinkedIn URL */}
            <div>
              <label
                htmlFor="linkedinUrl"
                className="block text-sm font-medium text-gray-700"
              >
                LinkedIn URL
              </label>
              <input
                {...register('linkedinUrl')}
                type="url"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="Enter LinkedIn profile URL"
              />
              {errors.linkedinUrl && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.linkedinUrl.message}
                </p>
              )}
            </div>

            {/* Display Order */}
            <div>
              <label
                htmlFor="displayOrder"
                className="block text-sm font-medium text-gray-700"
              >
                Display Order
              </label>
              <input
                {...register('displayOrder', { valueAsNumber: true })}
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                placeholder="0"
              />
              {errors.displayOrder && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.displayOrder.message}
                </p>
              )}
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  {...register('isFounder')}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label
                  htmlFor="isFounder"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Is Founder
                </label>
              </div>

              <div className="flex items-center">
                <input
                  {...register('isActive')}
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <label
                  htmlFor="isActive"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Active
                </label>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-6">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Bio
            </label>
            <textarea
              {...register('bio')}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Enter bio description"
            />
            {errors.bio && (
              <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-4">
          <Link
            href="/admin/team"
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white hover:bg-primary-dark disabled:opacity-50"
          >
            {isLoading ? (
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <FiSave className="mr-2 h-4 w-4" />
            )}
            {isEditing ? 'Update' : 'Create'}
          </button>
        </div>
      </form>
    </div>
  );
}
