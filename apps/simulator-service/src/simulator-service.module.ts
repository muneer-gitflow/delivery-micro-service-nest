import { Module } from '@nestjs/common';
import { SimulatorServiceController } from './simulator-service.controller';
import { SimulatorServiceService } from './simulator-service.service';

@Module({
  imports: [],
  controllers: [SimulatorServiceController],
  providers: [SimulatorServiceService],
})
export class SimulatorServiceModule {}
