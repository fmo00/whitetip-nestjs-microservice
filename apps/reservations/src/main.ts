import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';
import { ReservationsModule } from './reservations/reservations.module';

async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  app.useLogger(app.get(Logger))
  await app.listen(3000);
}
bootstrap();
