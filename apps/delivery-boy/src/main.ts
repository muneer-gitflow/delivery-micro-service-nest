import { NestFactory } from '@nestjs/core';
import { DeliveryBoyModule } from './delivery-boy.module';

async function bootstrap() {
  const app = await NestFactory.create(DeliveryBoyModule);
  await app.listen(3000);
}
bootstrap();
