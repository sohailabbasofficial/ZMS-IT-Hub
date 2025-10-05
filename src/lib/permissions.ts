export const ROLES = {
  ADMIN: 'admin',
  EDITOR: 'editor',
  VIEWER: 'viewer',
} as const;

export const PERMISSIONS = {
  // User management
  MANAGE_USERS: [ROLES.ADMIN],
  VIEW_USERS: [ROLES.ADMIN, ROLES.EDITOR],

  // Content management
  MANAGE_CONTENT: [ROLES.ADMIN, ROLES.EDITOR],
  PUBLISH_CONTENT: [ROLES.ADMIN, ROLES.EDITOR],
  VIEW_CONTENT: [ROLES.ADMIN, ROLES.EDITOR, ROLES.VIEWER],

  // Dashboard
  VIEW_DASHBOARD: [ROLES.ADMIN, ROLES.EDITOR, ROLES.VIEWER],

  // Settings
  MANAGE_SETTINGS: [ROLES.ADMIN],
  VIEW_ANALYTICS: [ROLES.ADMIN, ROLES.EDITOR],

  // File management
  UPLOAD_FILES: [ROLES.ADMIN, ROLES.EDITOR],
  DELETE_FILES: [ROLES.ADMIN],
} as const;

export function hasPermission(
  userRole: string,
  permission: keyof typeof PERMISSIONS
): boolean {
  const allowedRoles = PERMISSIONS[permission];
  return (allowedRoles as readonly string[]).includes(userRole);
}

export type UserRole = (typeof ROLES)[keyof typeof ROLES];
export type Permission = keyof typeof PERMISSIONS;
