import { Module } from '@nestjs/common';
import { CustomersResolver } from './customers.resolver';
import { SharedModule } from '@app/shared';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SharedModule.registerRmq('CUSTOMER', process.env.RABBITMQ_CUSTOMER_QUEUE),
  ],
  providers: [CustomersResolver],
})
export class CustomersModule {}