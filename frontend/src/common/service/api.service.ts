import {
  GetAllUsersResDto,
  GetAppointmentsResDto,
  GetTowerInfoResDto,
  GetUserInfoResDto,
  MessageResDto
} from 'common/dto';
import { httpClient } from 'common/http-client/http-client';

export class ApiService {
  public static async stopTower() {
    return httpClient.get<MessageResDto>(`/cli/stop-tower`);
  }
  public static async getTowerInfo() {
    return httpClient.get<GetTowerInfoResDto>(`/cli/tower-info`);
  }

  public static async getAllUsers() {
    return httpClient.get<GetAllUsersResDto>(`/cli/users`);
  }

  public static async getUserInfo(userId: string) {
    return httpClient.get<GetUserInfoResDto>(`/cli/get-user/${userId}`);
  }

  public static async getAllAppointments() {
    return httpClient.get<GetAppointmentsResDto>(`/cli/appointments`);
  }

  public static async getAppointmentsLocator(locator: string) {
    return httpClient.get<GetAppointmentsResDto>(`/cli/appointments/${locator}`);
  }
}
