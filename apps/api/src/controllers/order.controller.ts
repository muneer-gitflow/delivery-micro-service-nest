import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('orders')
@Controller('orders')
export class OrderController {
  @Get()
  findAll() {
    return 'This action returns all orders';
  }

  @Post()
  create(@Body() createOrderDto: any) {
    return 'This action adds a new order';
  }
}