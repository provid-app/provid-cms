import type { KPIDTO } from "./summary.model";

export interface UserKPIDTO {
  total_users: KPIDTO;
  active_users: KPIDTO;
  engagement_rate: KPIDTO;
}
