interface TowerAddressDto {
  type: string;
  address: string;
  port: number;
}

export interface TowerInfoDto {
  tower_id: string;
  n_registered_users: number;
  n_watcher_appointments: number;
  n_responder_trackers: number;
  bitcoind_reachable: boolean;
  addresses: TowerAddressDto[];
}

export interface GetTowerInfoResDto {
  towerInfo: TowerInfoDto;
}
