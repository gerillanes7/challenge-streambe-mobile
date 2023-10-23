import { UserData } from "../../../domain/entities/UserDTO";

export interface IUserItem {
  user: UserData;
  handleGoToDetail: (user: UserData) => void;
}
