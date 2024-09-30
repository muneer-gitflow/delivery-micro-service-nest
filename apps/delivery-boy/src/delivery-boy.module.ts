import { Module } from '@nestjs/common';
import { DeliveryBoyController } from './delivery-boy.controller';
import { DeliveryBoyService } from './delivery-boy.service';

@Module({
  imports: [],
  controllers: [DeliveryBoyController],
  providers: [DeliveryBoyService],
})
export class DeliveryBoyModule {}
