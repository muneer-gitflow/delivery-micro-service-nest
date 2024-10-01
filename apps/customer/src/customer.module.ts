import { SharedModule, SharedService } from '@app/shared';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  imports: [
    SharedModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [CustomerController],
  providers: [CustomerService, SharedService],
})
export class CustomerModule {}
