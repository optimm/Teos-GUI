import { Test, TestingModule } from '@nestjs/testing';
import { TowerCliController } from '../tower-cli.controller';
import { TowerCliService } from '../tower-cli.service';
import { MockTowerCliService } from './utils/mock-tower-service';
import {
  allUsersDummyData,
  dummyAppointmentLocator,
  dummyAppointments,
  dummyUserData,
  dummyUserPublicKey,
  towerDummyData,
} from '../../../data/dummy-data';

describe('TowerCliController', () => {
  let controller: TowerCliController;
  let service: TowerCliService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TowerCliController],
      providers: [TowerCliService],
    })
      .overrideProvider(TowerCliService)
      .useValue(MockTowerCliService)
      .compile();

    controller = module.get<TowerCliController>(TowerCliController);
    service = module.get<TowerCliService>(TowerCliService);
  });

  it('check: controller should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });

  it('check: should get tower information', async () => {
    const towerInfo = await controller.getTowerInfo();

    expect(service.getTowerInfo).toHaveBeenCalled();
    expect(service.getTowerInfo).toHaveReturned();

    expect(towerInfo).toBeDefined();
    expect(towerInfo).toEqual(towerDummyData);
  });

  it('check: should get all users', async () => {
    const allUsers = await controller.getAllUsers();

    expect(service.getAllUsers).toHaveBeenCalled();
    expect(service.getAllUsers).toHaveReturned();

    expect(allUsers).toBeDefined();
    expect(allUsers).toEqual(allUsersDummyData);
  });

  it('check: should get user information for a given public key', async () => {
    const userInfo = await controller.getUser(dummyUserPublicKey);

    expect(service.getUserInfo).toHaveBeenCalledWith(dummyUserPublicKey);
    expect(service.getUserInfo).toHaveReturned();

    expect(userInfo).toBeDefined();
    expect(userInfo).toEqual(dummyUserData);
  });

  it('check: should get all appointments', async () => {
    const allAppointments = await controller.getAllAppointments();

    expect(service.getAllAppointments).toHaveBeenCalled();
    expect(service.getAllAppointments).toHaveReturned();

    expect(allAppointments).toBeDefined();
    expect(allAppointments).toEqual(dummyAppointments);
  });

  it('check: should get appointments with a given locator', async () => {
    const appointments = await controller.getAppointmentsWithLocator(
      dummyAppointmentLocator,
    );
    expect(service.getAppointmentsWithLocator).toHaveBeenCalledWith(
      dummyAppointmentLocator,
    );
    expect(appointments).toBeDefined();
    expect(appointments).toEqual(dummyAppointments);
  });
});
