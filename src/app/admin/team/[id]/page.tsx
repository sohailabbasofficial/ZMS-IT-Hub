'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import TeamMemberForm from '@/components/admin/forms/TeamMemberForm';
import LoadingSpinner from '@/components/admin/ui/LoadingSpinner';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio?: string;
  imageUrl?: string;
  linkedinUrl?: string;
  email?: string;
  phone?: string;
  isFounder: boolean;
  displayOrder: number;
  isActive: boolean;
}

export default function EditTeamMemberPage() {
  const params = useParams();
  const [teamMember, setTeamMember] = useState<TeamMember | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      fetchTeamMember(params.id as string);
    }
  }, [params.id]);

  const fetchTeamMember = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/team/${id}`);

      if (response.ok) {
        const data = await response.json();
        setTeamMember(data);
      } else {
        setError('Team member not found');
      }
    } catch (error) {
      console.error('Error fetching team member:', error);
      setError('Failed to load team member');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error || !teamMember) {
    return (
      <div className="py-12 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Error</h2>
        <p className="mb-8 text-gray-600">{error || 'Team member not found'}</p>
        <a
          href="/admin/team"
          className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary-dark"
        >
          Back to Team Members
        </a>
      </div>
    );
  }

  return (
    <TeamMemberForm
      initialData={teamMember}
      isEditing={true}
      memberId={teamMember.id}
    />
  );
}
