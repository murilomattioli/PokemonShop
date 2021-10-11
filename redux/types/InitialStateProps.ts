import { UserType } from "../../hooks/userHooks/types";

export type InitialStateProps = {
  user: UserType | null,
  canReloadCart: string | null,
};
