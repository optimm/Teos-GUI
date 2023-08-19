import { Injectable } from '@nestjs/common';
import { RunCommandService } from '../run-command/run-command.service';
import { CommandTypeEnum } from '../run-command/enum/run-command.enum';
import { RunCommandDto } from '../run-command/dto/run-command.dto';
import { GetAllUsersResDto, GetTowerInfoResDto } from './dto';
import { GetUserInfoResDto } from './dto/users.dto';
import { GetAppointmentsResDto } from './dto/appointment.dto';
import { MessageResDto } from '../../common/dto';

@Injectable()
export class TowerCliService {
  constructor(private runCommandService: RunCommandService) {}

  async stopTower(): Promise<MessageResDto> {
    const commandToRun = RunCommandDto.getCommand(CommandTypeEnum.stopTower);
    const result = await this.runCommandService.runCommand(commandToRun);
    return { message: result };
  }

  async getTowerInfo(): Promise<GetTowerInfoResDto> {
    const commandToRun = RunCommandDto.getCommand(CommandTypeEnum.getTowerInfo);
    const result = await this.runCommandService.runCommand(commandToRun);

    const towerInfo = GetTowerInfoResDto.fromJson(result);

    return towerInfo;
  }

  async getAllUsers(): Promise<GetAllUsersResDto> {
    const commandToRun = RunCommandDto.getCommand(CommandTypeEnum.getAllUsers);

    const result = await this.runCommandService.runCommand(commandToRun);
    const userIds = GetAllUsersResDto.fromJson(result);

    return userIds;
  }

  async getUserInfo(userPublicKey: string): Promise<GetUserInfoResDto> {
    const commandToRun = RunCommandDto.getCommand(
      CommandTypeEnum.getUserInfo,
      userPublicKey,
    );

    const result = await this.runCommandService.runCommand(commandToRun);
    const userInfo = GetUserInfoResDto.fromJson(result);

    return userInfo;
  }

  async getAllAppointments(): Promise<GetAppointmentsResDto> {
    const commandToRun = RunCommandDto.getCommand(
      CommandTypeEnum.getAllAppointments,
    );

    const result = await this.runCommandService.runCommand(commandToRun);
    const appointments = GetAppointmentsResDto.fromJson(result);

    return appointments;
  }

  async getAppointmentsWithLocator(
    appointmentLocator: string,
  ): Promise<GetAppointmentsResDto> {
    const commandToRun = RunCommandDto.getCommand(
      CommandTypeEnum.getAppointmentsLocator,
      appointmentLocator,
    );

    const result = await this.runCommandService.runCommand(commandToRun);
    const appointments = GetAppointmentsResDto.fromJson(result);

    return appointments;
  }
}
