import { Controller, Get } from '@nestjs/common';
import { DeliveryBoyService } from './delivery-boy.service';

@Controller()
export class DeliveryBoyController {
  constructor(private readonly deliveryBoyService: DeliveryBoyService) {}

  @Get()
  getHello(): string {
    return this.deliveryBoyService.getHello();
  }
}
