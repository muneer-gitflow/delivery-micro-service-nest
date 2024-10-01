import { Module } from '@nestjs/common';

import { SharedModule } from '@app/shared';
import { HealthResolver } from './health.resolver';

@Module({
  imports: [
    SharedModule.registerRmq('CUSTOMER', process.env.RABBITMQ_CUSTOMER_QUEUE),
    SharedModule.registerRmq('DELIVERY', process.env.RABBITMQ_DELIVERY_QUEUE),
    // Add other services here as needed
  ],
  providers: [HealthResolver],
})
export class HealthModule {}
