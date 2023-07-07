import { Test, TestingModule } from '@nestjs/testing';
import { TowerCliService } from '../tower-cli.service';
import { RunCommandService } from '../../run-command/run-command.service';
import {
  GetAllUsersResDto,
  GetAppointmentsResDto,
  GetTowerInfoResDto,
  GetUserInfoResDto,
} from '../dto';
import {
  allUsersDummyData,
  dummyAppointmentLocator,
  dummyAppointments,
  dummyUserData,
  dummyUserPublicKey,
  towerDummyData,
} from '../../../data/dummy-data';
import { CommandTypeEnum } from '../../run-command/enum/run-command.enum';

describe('TowerCliService', () => {
  let service: TowerCliService;
  let runCommandService: RunCommandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TowerCliService, RunCommandService],
    }).compile();

    service = module.get<TowerCliService>(TowerCliService);
    runCommandService = module.get<RunCommandService>(RunCommandService);
  });

  it('check: service should be defined', () => {
    expect(service).toBeDefined();
    expect(runCommandService).toBeDefined();
  });

  it('check: should get tower information', async () => {
    const expectedResult: GetTowerInfoResDto = { towerInfo: towerDummyData };
    const json = JSON.stringify(towerDummyData);

    jest.spyOn(runCommandService, 'runCommand').mockResolvedValue(json);
    const result = await service.getTowerInfo();

    expect(runCommandService.runCommand).toHaveBeenCalledWith(
      expect.objectContaining({
        command: 'teos-cli',
        args: [CommandTypeEnum.getTowerInfo],
      }),
    );
    expect(runCommandService.runCommand).toHaveReturned();

    expect(result).toBeDefined();
    expect(result).toEqual(expectedResult);
  });

  it('check: should get all users', async () => {
    const expectedResult: GetAllUsersResDto = { user_ids: allUsersDummyData };
    const json = JSON.stringify(expectedResult);

    jest.spyOn(runCommandService, 'runCommand').mockResolvedValue(json);
    const result = await service.getAllUsers();

    expect(runCommandService.runCommand).toHaveBeenCalledWith(
      expect.objectContaining({
        command: 'teos-cli',
        args: [CommandTypeEnum.getAllUsers],
      }),
    );
    expect(runCommandService.runCommand).toHaveReturned();

    expect(result).toBeDefined();
    expect(result).toEqual(expectedResult);
  });

  it('check: should get user information for a given public key', async () => {
    const expectedResult: GetUserInfoResDto = { userData: dummyUserData };
    const json = JSON.stringify(dummyUserData);

    jest.spyOn(runCommandService, 'runCommand').mockResolvedValue(json);
    const result = await service.getUserInfo(dummyUserPublicKey);

    expect(runCommandService.runCommand).toHaveBeenCalledWith(
      expect.objectContaining({
        command: 'teos-cli',
        args: [CommandTypeEnum.getUserInfo, dummyUserPublicKey],
      }),
    );
    expect(runCommandService.runCommand).toHaveReturned();

    expect(result).toBeDefined();
    expect(result).toEqual(expectedResult);
  });

  it('check: should get all appointments', async () => {
    const expectedResult: GetAppointmentsResDto = {
      appointments: dummyAppointments,
    };
    const json = JSON.stringify(expectedResult);

    jest.spyOn(runCommandService, 'runCommand').mockResolvedValue(json);
    const result = await service.getAllAppointments();

    expect(runCommandService.runCommand).toHaveBeenCalledWith(
      expect.objectContaining({
        command: 'teos-cli',
        args: [CommandTypeEnum.getAllAppointments],
      }),
    );
    expect(runCommandService.runCommand).toHaveReturned();

    expect(result).toBeDefined();
    expect(result).toEqual(expectedResult);
  });

  it('check: should get appointments with a given locator', async () => {
    const expectedResult: GetAppointmentsResDto = {
      appointments: dummyAppointments,
    };
    const json = JSON.stringify(expectedResult);

    jest.spyOn(runCommandService, 'runCommand').mockResolvedValue(json);
    const result = await service.getAppointmentsWithLocator(
      dummyAppointmentLocator,
    );

    expect(runCommandService.runCommand).toHaveBeenCalledWith(
      expect.objectContaining({
        command: 'teos-cli',
        args: [CommandTypeEnum.getAppointmentsLocator, dummyAppointmentLocator],
      }),
    );
    expect(runCommandService.runCommand).toHaveReturned();

    expect(result).toBeDefined();
    expect(result).toEqual(expectedResult);
  });
});
