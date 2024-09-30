import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('deliveries')
@Controller('deliveries')
export class DeliveryController {
  @Get()
  findAll() {
    return 'This action returns all deliveries';
  }

  @Post()
  create(@Body() createDeliveryDto: any) {
    return 'This action adds a new delivery';
  }
}