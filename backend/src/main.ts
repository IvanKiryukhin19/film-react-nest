import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { DevLogger } from './logger/dev-logger.service';
import { TskvLogger } from './logger/tskv-logger.service';
import { JsonLogger } from './logger/json-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api/afisha');
  app.enableCors();
  const loggerType = process.env.LOGGER_TYPE;
  switch (loggerType) {
    case 'TSKV':
      app.useLogger(new TskvLogger());
      break;
    case 'JSON':
      app.useLogger(new JsonLogger());
    default:
      app.useLogger(new DevLogger());
  }
  await app.listen(3000);
}
bootstrap();
