export class TowerAddressDto {
  type: string;
  address: string;
  port: number;
}

export class TowerInfoDto {
  tower_id: string;
  n_registered_users: number;
  n_watcher_appointments: number;
  n_responder_trackers: number;
  bitcoind_reachable: boolean;
  addresses: TowerAddressDto[];
}

export class GetTowerInfoResDto {
  towerInfo: TowerInfoDto;

  static fromJson(json: string): GetTowerInfoResDto {
    const data = JSON.parse(json) as TowerInfoDto;
    return { towerInfo: data };
  }
}
