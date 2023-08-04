import { GetAllUsersResDto, GetTowerInfoResDto } from 'common/dto';
import { httpClient } from 'common/http-client/http-client';

export class ApiService {
  public static async getTowerInfo() {
    return await httpClient.get<GetTowerInfoResDto>(`/cli/tower-info`);
  }

  public static async getAllUsers() {
    return await httpClient.get<GetAllUsersResDto>(`/cli/users`);
  }
}
