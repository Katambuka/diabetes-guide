import { User } from "node_modules/next-auth/core/types";

export type UserWithProfile = User & {
  diabetesType?: string | null;
  diagnosisDate?: Date | null;
  lastA1C?: number | null;
  doctor?: string | null;
};