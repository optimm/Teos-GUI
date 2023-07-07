import { Module } from '@nestjs/common';
import { TowerCliModule } from './modules/tower-cli/tower-cli.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionsFilter } from './common/filters/global-exception.filter';
import { TowerCliService } from './modules/tower-cli/tower-cli.service';
import { RunCommandService } from './modules/run-command/run-command.service';

@Module({
  imports: [
    TowerCliModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionsFilter,
    },
    TowerCliService,
    RunCommandService,
  ],
})
export class AppModule {}
