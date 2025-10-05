# Image Upload System

This directory contains uploaded images for team members.

## Directory Structure
```
public/uploads/team/
├── .gitkeep
└── [uploaded images]
```

## Features

### Image Upload API (`/api/admin/upload/image`)
- **Method**: POST
- **Authentication**: Admin required
- **File Types**: JPEG, JPG, PNG, WebP
- **Max Size**: 5MB
- **Response**: Returns public URL for uploaded image

### Image Upload Component (`ImageUpload.tsx`)
- Drag & drop interface
- File validation (type and size)
- Image preview
- Upload progress indicator
- Error handling
- Remove image functionality

### Team Member Form Integration
- Replaces URL input with file upload
- Real-time image preview
- Automatic URL generation
- Seamless integration with existing form validation

## Usage

1. **Admin Panel**: Navigate to `/admin/team/new` or edit existing team member
2. **Upload Image**: Click on the upload area or drag & drop an image
3. **Preview**: See immediate preview of uploaded image
4. **Save**: Image URL is automatically included when saving team member
5. **Display**: Uploaded images appear on the public team page (`/team`)

## File Naming Convention
Uploaded files are automatically renamed with format:
```
team-{timestamp}-{randomString}.{extension}
```

Example: `team-1699123456789-abc123def456.jpg`

## Security Features
- File type validation
- File size limits
- Admin authentication required
- Secure file storage in public directory
- Automatic filename generation to prevent conflicts

## Error Handling
- Invalid file type messages
- File size limit warnings
- Upload failure notifications
- Network error handling
- Graceful fallback to default image
