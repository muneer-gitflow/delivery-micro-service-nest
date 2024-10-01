import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CustomerService } from './customer.service';

@Controller()
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @MessagePattern({ cmd: 'get_customers' })
  getCustomers() {
    return this.customerService.getCustomers();
  }

  @MessagePattern({ cmd: 'customer_ping' })
  pingCustomer() {
    return 'pong from customer';
  }
}
