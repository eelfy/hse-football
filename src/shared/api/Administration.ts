import { customFetch } from './lib/customFetch.util';
import {
  PlayerData,
  PlayerRequest,
  TeamRequest,
  TeamsCreationsRequest,
  TeamsCreationsRequestStatus,
} from '../lib/Requests.types';

const PlayerApplications = 'PlayerApplications';
const TeamApplications = 'TeamApplications';
const Teams = 'Teams';

export const AdministrationApi = {
  getPlayer: (phoneNumber: string) => customFetch<PlayerData>(
    `Players/${phoneNumber}`,
  ),

  getPlayerApplications: () => customFetch<PlayerRequest[]>(
    `${PlayerApplications}`,
  ),
  getPlayerApplicationById: (id: number) => customFetch<PlayerRequest>(
    `${PlayerApplications}/${id}`,
  ),
  deletePlayerApplication: (id: number) => customFetch(
    `${PlayerApplications}/${id}`,
    {
      method: 'DELETE',
    },
  ),

  getTeamApplications: () => customFetch<TeamRequest[]>(
    `${TeamApplications}`,
  ),
  getTeamApplicationById: (id: number) => customFetch<TeamRequest>(
    `${TeamApplications}/${id}`,
  ),
  deleteTeamApplication: (id: number) => customFetch(
    `${TeamApplications}/${id}`,
    {
      method: 'DELETE',
    },
  ),

  getTeamCreateApplicationsByStatus: (
    status: TeamsCreationsRequestStatus,
  ) => customFetch<TeamsCreationsRequest[]>(
    `${Teams}/filters`,
    {
      body: JSON.stringify({
        status,
      }),
    },
  ),
  getTeamCreateRequestById: (id: number) => customFetch<TeamsCreationsRequest>(
    `${Teams}/${id}`,
  ),
  updateTeamCreateRequest: (
    id: number,
    newTeamRequest:Partial<TeamsCreationsRequest>,
  ) => customFetch(
    `${Teams}/${id}`,
    {
      method: 'DELETE',
      body: JSON.stringify({
        ...newTeamRequest,
      }),
    },
  ),
};
