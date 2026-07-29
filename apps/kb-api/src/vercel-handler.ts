import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

let server: ((req: unknown, res: unknown) => unknown) | undefined;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.init();

  return app.getHttpAdapter().getInstance();
}

export default async function handler(req: unknown, res: unknown) {
  const requestHandler = server ?? (await bootstrap());
  server = requestHandler;

  return requestHandler(req, res);
}
