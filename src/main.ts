import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from "dotenv"

async function bootstrap() {
  dotenv.config();
  const serverPort = process.env.PORT as string || 3001
  const app = await NestFactory.create(AppModule, {abortOnError: false});
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(serverPort).then(() => {
    console.log(`HTTP Server running at port ${serverPort}`)
  });
}
bootstrap();
