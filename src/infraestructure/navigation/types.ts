import { UserData } from "../../domain/entities/UserDTO";

export type AppNavigatorType = {
  Login: undefined;
  Tabs: undefined;
  ProfileDetail: { user: UserData };
};
