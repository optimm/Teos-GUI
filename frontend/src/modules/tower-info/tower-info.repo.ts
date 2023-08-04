import { httpClient } from 'common/http-client/http-client';
import { GetTowerInfoResDto } from './dto/tower-info.dto';

export class TowerInfoRepo {
  public static async getTowerInfo(): Promise<void> {
    try {
      const { data } = await httpClient.get<GetTowerInfoResDto>(`/cli/tower-info`);
      console.log({ data });
    } catch (error) {
      console.log({ error });
    }
  }
}
