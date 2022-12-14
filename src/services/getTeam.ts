import { getContributorsService } from './getContributorsService';

export interface MemberData {
  id: string;
  username: string;
  discriminator: string;
  tag: string;
  status: 'dnd' | 'online' | 'idle' | 'offline' | null;
  avatar: string;
}

export interface TeamData {
  id: string;
  name: string;
  hexColor: string;
  members: MemberData[];
}

export async function getTeam(): Promise<TeamData[]> {
  const { data } = await getContributorsService().get<TeamData[]>('team');

  return data;
}
