import { NestFactory } from '@nestjs/core';
import { SimulatorServiceModule } from './simulator-service.module';

async function bootstrap() {
  const app = await NestFactory.create(SimulatorServiceModule);
  await app.listen(3000);
}
bootstrap();
