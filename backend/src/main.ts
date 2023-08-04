import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('port');
  const globalPrefix = configService.get<string>('apiGlobalPrefix');

  app.enableCors();

  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);
}
bootstrap();
