import { Controller, Get, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller('api/customer')
export class CustomerController {
  constructor(
    @Inject('CUSTOMER_SERVICE') private readonly customerClient: ClientKafka,
  ) {}

  @Get()
  async getCustomerInfo() {
    return this.customerClient.send('get_customer_info', {});
  }
}