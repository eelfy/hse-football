export interface PlayerRequest {
  id: number;
  playerPhoneNumber?: string;
  footballPosition: number;
  preferredTournaments: number;
  faculty?: string;
}

export interface TeamRequest {
  id: number;
  teamId: number;
  playerPosition: number;
  tournaments: number;
  description?: string
}

export interface TeamsCreationsRequest {
  id: number;
  name?: string;
  captainPhoneNumber?: string;
  logoURL?: string;
  about?: string;
  status: TeamsCreationsRequestStatus
}

export interface PlayerData {
  phoneNumber: string,
  name?: string,
  isCaptain: boolean,
  isRegistered: boolean,
  about?: string,
  contact?: string,
  footballExperience?: string,
  tournamentExperience?: string,
  photoURL?: string,
  hseRole?: string,
  applicationId: number,
}

export type FullPlayerInfo = PlayerData & PlayerRequest;

export enum TeamsCreationsRequestStatus {
  Expectation = 0,
  Confirmed = 1,
  Rejected = 2,
}
