import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DeliveryService } from './delivery.service';

@Controller()
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @MessagePattern({ cmd: 'get_deliveries' })
  getDeliveries() {
    return this.deliveryService.getDeliveries();
  }

  @MessagePattern({ cmd: 'delivery_ping' })
  pingDelivery() {
    return 'pong from delivery';
  }
}