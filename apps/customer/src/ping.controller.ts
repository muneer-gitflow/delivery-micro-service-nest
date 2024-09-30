import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class PingController {
  @MessagePattern('ping.customer')
  pingCustomer(@Payload() message: string): string {
    console.log('Received ping:', message);
    return 'Pong from Customer Service';
  }
}