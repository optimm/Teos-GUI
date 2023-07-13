import { Controller, Get, Param } from '@nestjs/common';
import { TowerCliService } from './tower-cli.service';
import { GetAllUsersResDto, GetTowerInfoResDto } from './dto';
import { GetUserInfoResDto } from './dto/users.dto';
import { GetAppointmentsResDto } from './dto/appointment.dto';

@Controller('cli')
export class TowerCliController {
  constructor(private towerCliService: TowerCliService) {}

  @Get('tower-info')
  getTowerInfo(): Promise<GetTowerInfoResDto> {
    return this.towerCliService.getTowerInfo();
  }

  @Get('users')
  getAllUsers(): Promise<GetAllUsersResDto> {
    return this.towerCliService.getAllUsers();
  }

  @Get('get-user/:userPublicKey')
  getUser(
    @Param('userPublicKey') userPublicKey: string,
  ): Promise<GetUserInfoResDto> {
    return this.towerCliService.getUserInfo(userPublicKey);
  }

  @Get('appointments')
  getAllAppointments(): Promise<GetAppointmentsResDto> {
    return this.towerCliService.getAllAppointments();
  }

  @Get('appointments/:appointmentLocator')
  getAppointmentsWithLocator(
    @Param('appointmentLocator') appointmentLocator: string,
  ): Promise<GetAppointmentsResDto> {
    return this.towerCliService.getAppointmentsWithLocator(appointmentLocator);
  }
}
