export interface PlayerRequest {
  id: number;
  playerPhoneNumber?: string;
  footballPosition: number;
  preferredTournaments: number;
  faculty?: string;
  footballExperience?: string;
  tournamentExperience?: string;
  contact?: string;
  name?: string
  photo?: string;
}

export interface TeamRequest {
  id: number;
  teamId: number;
  playerPosition: number;
  tournaments: number;
  description?: string;
  name?: string;
  logo?: string;
  contact?: string;
}

export interface TeamsCreationsRequest {
  id: number;
  name?: string;
  captainPhoneNumber?: string;
  captainName?: string;
  logo?: string;
  about?: string;
  status: TeamsCreationsRequestStatus
}

export enum TeamsCreationsRequestStatus {
  Expectation = 0,
  Confirmed = 1,
  Rejected = 2,
}
