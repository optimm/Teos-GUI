import { httpClient } from 'common/http-client/http-client';
import { GetTowerInfoResDto } from './dto/tower-info.dto';

export class TowerInfoRepo {
  public static async getTowerInfo() {
    return await httpClient.get<GetTowerInfoResDto>(`/cli/tower-info`);
  }
}
