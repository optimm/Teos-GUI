import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { Appointment, TowerAddressDto } from '../src/modules/tower-cli/dto';
import { AppModule } from '../src/app.module';
import {
  dummyNotFoundUserKey,
  dummyAppointmentLocator,
} from '../src/data/dummy-data';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  //check get tower info
  it('/tower-info (GET): Check get tower info', () => {
    return request(app.getHttpServer())
      .get('/cli/tower-info')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeDefined();

        const { towerInfo } = res.body;

        expect(towerInfo).toBeDefined();

        expect(towerInfo).toHaveProperty('tower_id');
        expect(towerInfo).toHaveProperty('n_registered_users');
        expect(towerInfo).toHaveProperty('n_watcher_appointments');
        expect(towerInfo).toHaveProperty('n_responder_trackers');
        expect(towerInfo).toHaveProperty('bitcoind_reachable');
        expect(towerInfo).toHaveProperty('addresses');

        expect(Array.isArray(towerInfo.addresses)).toBeTruthy();
        towerInfo.addresses.forEach((address: TowerAddressDto) => {
          expect(address).toHaveProperty('type');
          expect(address).toHaveProperty('address');
          expect(address).toHaveProperty('port');
        });
      });
  });

  //check get all users
  it('/users (GET): Check get all users', () => {
    return request(app.getHttpServer())
      .get('/cli/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeDefined();

        const userIdData = res.body;
        expect(userIdData).toBeDefined();
        expect(userIdData).toHaveProperty('user_ids');

        expect(Array.isArray(userIdData.user_ids)).toBeTruthy();
        userIdData.user_ids.forEach((id: string) => {
          expect(id).toBeDefined();
        });
      });
  });

  //check get all appointments
  it('/appointments (GET): Check get all appointments', () => {
    return request(app.getHttpServer())
      .get('/cli/appointments')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeDefined();
        const { appointments } = res.body;
        expect(appointments).toBeDefined();
        expect(Array.isArray(appointments)).toBeTruthy();
        appointments.forEach((appointment: Appointment) => {
          expect(appointment).toBeDefined();
          expect(appointment).toHaveProperty('locator');
          expect(appointment).toHaveProperty('encrypted_blob');
          expect(appointment).toHaveProperty('to_self_delay');
        });
      });
  });

  //check get user info
  it('/get-user/:userPublicKey (GET): Check get user info by public key', async () => {
    const userIdData = await request(app.getHttpServer())
      .get('/cli/users')
      .expect(200);

    const userId = userIdData.body.user_ids[0];
    const getUserInfoResponse = await request(app.getHttpServer())
      .get(`/cli/get-user/${userId}`)
      .expect(200);

    const { userData } = getUserInfoResponse.body;

    expect(userData).toBeDefined;
    expect(userData).toHaveProperty('available_slots');
    expect(userData).toHaveProperty('subscription_expiry');
    expect(Array.isArray(userData.appointments)).toBeTruthy();
  });

  //checking error
  it('/get-user/:userPublicKey (GET): Check get user info by public key, Invalid public key', () => {
    return request(app.getHttpServer())
      .get(`/cli/get-user/abc`)
      .expect(400)
      .expect((res) => {
        const { message } = res.body;
        expect(message).toBeDefined();
        expect(message).toContain('public key does not match expected format');
      });
  });

  //checking not found
  it('/get-user/:userPublicKey (GET): Check get user info by public key User not found', () => {
    return request(app.getHttpServer())
      .get(`/cli/get-user/${dummyNotFoundUserKey}`)
      .expect(404)
      .expect((res) => {
        const { message } = res.body;
        expect(message).toBeDefined();
        expect(message).toContain('User not found' || 'user not found');
      });
  });

  it('/appointments/:locator (GET): Check get appointments by locator', async () => {
    // Get sample locator from the /appointments endpoint
    const appointmentsResponse = await request(app.getHttpServer())
      .get('/cli/appointments')
      .expect(200);

    const appointments = appointmentsResponse.body.appointments;
    const sampleLocator =
      appointments.length > 0
        ? appointments[0].locator
        : dummyAppointmentLocator;

    return request(app.getHttpServer())
      .get(`/cli/appointments/${sampleLocator}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeDefined();
        const { appointments } = res.body;
        expect(appointments).toBeDefined();
        expect(Array.isArray(appointments)).toBeTruthy();
        appointments.forEach((appointment: Appointment) => {
          expect(appointment).toBeDefined();
          expect(appointment).toHaveProperty('locator');
          expect(appointment).toHaveProperty('encrypted_blob');
          expect(appointment).toHaveProperty('to_self_delay');
        });
      });
  });

  //check error
  it('/appointments/:locator (GET): Check get appointments by locator, invalid locator', async () => {
    return request(app.getHttpServer())
      .get(`/cli/appointments/abc`)
      .expect(400)
      .expect((res) => {
        const { message } = res.body;
        expect(message).toBeDefined();
        expect(message).toContain('Locator' || 'locator');
      });
  });
});
