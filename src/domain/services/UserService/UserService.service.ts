import { UserDTO } from "../../entities";
import { UserData } from "../../entities/UserDTO";
import { httpClient } from "../../http";

export class UserService {
  httpClient;

  constructor() {
    this.httpClient = httpClient;
  }

  async getUsers(): Promise<UserData[]> {
    try {
      const { data } = await this.httpClient.get<UserDTO>("/users");

      return data.users;
    } catch (e) {
      throw new Error(e as string);
    }
  }
}