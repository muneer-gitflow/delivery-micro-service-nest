import { Module } from '@nestjs/common';
import { OrderController } from './controllers/order.controller';
import { CustomerController } from './controllers/customer.controller';
import { DeliveryController } from './controllers/delivery.controller';
import { PingController } from './controllers/ping.controller';

@Module({
  imports: [],
  controllers: [OrderController, CustomerController, DeliveryController, PingController],
  providers: [],
})
export class AppModule {}
