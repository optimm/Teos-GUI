export interface Appointment {
  locator: string;
  encrypted_blob: string;
  to_self_delay: number;
}

export interface Tracker {
  dispute_txid: string;
  penalty_txid: string;
  penalty_rawtx: string;
}

export interface GetAppointmentsResDto {
  appointments: Appointment[];
}
