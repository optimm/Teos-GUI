export class GetAllUsersResDto {
  user_ids: string[];

  static fromJson(json: string): GetAllUsersResDto {
    const data = JSON.parse(json);
    return { user_ids: data.user_ids };
  }
}

export class UserData {
  available_slots: number;
  subscription_expiry: number;
  appointments: string[];
}

export class GetUserInfoResDto {
  userData: UserData;
  static fromJson(json: string): GetUserInfoResDto {
    const data = JSON.parse(json) as UserData;
    return { userData: data };
  }
}
