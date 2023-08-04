export interface GetAllUsersResDto {
  user_ids: string[];
}

export interface UserData {
  available_slots: number;
  subscription_expiry: number;
  appointments: string[];
}

export interface GetUserInfoResDto {
  userData: UserData;
}
