import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from "dotenv"
import { PrismaClientExceptionFilter } from './common/filters/prisma-client-exception.filter';

async function bootstrap() {
  dotenv.config();
  const serverPort = process.env.PORT || 3001
  const app = await NestFactory.create(AppModule, {abortOnError: false});
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.useGlobalFilters(new PrismaClientExceptionFilter())
  await app.listen(serverPort).then(() => {
    console.log(`HTTP Server running at port ${serverPort}.`)
  });
}
bootstrap();
