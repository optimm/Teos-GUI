import { Module } from '@nestjs/common';
import { TowerCliController } from './tower-cli.controller';
import { TowerCliService } from './tower-cli.service';
import { RunCommandService } from '../run-command/run-command.service';

@Module({
  controllers: [TowerCliController],
  providers: [TowerCliService, RunCommandService],
})
export class TowerCliModule {}
