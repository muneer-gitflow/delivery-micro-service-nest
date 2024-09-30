import { Controller, Get } from '@nestjs/common';
import { SimulatorServiceService } from './simulator-service.service';

@Controller()
export class SimulatorServiceController {
  constructor(private readonly simulatorServiceService: SimulatorServiceService) {}

  @Get()
  getHello(): string {
    return this.simulatorServiceService.getHello();
  }
}
