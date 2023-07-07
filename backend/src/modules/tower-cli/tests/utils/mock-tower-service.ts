import { jest } from '@jest/globals';
import {
  allUsersDummyData,
  dummyAppointments,
  dummyUserData,
  towerDummyData,
} from '../../../../data/dummy-data';

export const MockTowerCliService = {
  getTowerInfo: jest
    .fn()
    .mockImplementation(() => Promise.resolve(towerDummyData)),

  getAllUsers: jest
    .fn()
    .mockImplementation(() => Promise.resolve(allUsersDummyData)),

  getUserInfo: jest
    .fn()
    .mockImplementation((_dummyUserPublicKey: string) =>
      Promise.resolve(dummyUserData),
    ),

  getAllAppointments: jest
    .fn()
    .mockImplementation(() => Promise.resolve(dummyAppointments)),

  getAppointmentsWithLocator: jest
    .fn()
    .mockImplementation((_dummyAppointmentLocator: string) =>
      Promise.resolve(dummyAppointments),
    ),
};
