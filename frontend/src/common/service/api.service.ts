import { GetAllUsersResDto, GetTowerInfoResDto, GetUserInfoResDto } from 'common/dto';
import { httpClient } from 'common/http-client/http-client';

export class ApiService {
  public static async getTowerInfo() {
    return httpClient.get<GetTowerInfoResDto>(`/cli/tower-info`);
  }

  public static async getAllUsers() {
    return httpClient.get<GetAllUsersResDto>(`/cli/users`);
  }

  public static async getUserInfo(userId: string) {
    return httpClient.get<GetUserInfoResDto>(`/cli/get-user/${userId}`);
  }
}
