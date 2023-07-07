export class Appointment {
  locator: string;
  encrypted_blob: string;
  to_self_delay: number;
}

class Tracker {
  dispute_txid: string;
  penalty_txid: string;
  penalty_rawtx: string;
}

export class GetAppointmentsResDto {
  appointments: Appointment[] | Tracker[];

  static fromJson(json: string): GetAppointmentsResDto {
    const data = JSON.parse(json) as GetAppointmentsResDto;
    return data;
  }
}
