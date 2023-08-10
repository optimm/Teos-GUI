import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { TowerCliModule } from '../src/modules/tower-cli/tower-cli.module';
import { Appointment, TowerAddressDto } from '../src/modules/tower-cli/dto';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TowerCliModule],
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
});
