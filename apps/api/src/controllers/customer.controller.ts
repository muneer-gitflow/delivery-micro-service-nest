import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('customers')
@Controller('customers')
export class CustomerController {
  @Get()
  findAll() {
    return 'This action returns all customers';
  }

  @Post()
  create(@Body() createCustomerDto: any) {
    return 'This action adds a new customer';
  }
}