export interface MissionDTO {
  id: number;
  mission_name: string;
  mission_status: string;
  publication_date: string | null;
  scheduled_at: string | null;
  task: string;
  reward: number;
  instruction: string;
  mission_desc: string;
  segment: {
    id: number;
    segmet: string;
  };
  created_at: string;
}
