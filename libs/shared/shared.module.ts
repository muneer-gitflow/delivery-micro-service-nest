import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'FAN_IN_SERVICE',
      useFactory: (configService: ConfigService) => {
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RABBITMQ_URL')],
            queue: configService.get<string>('RABBITMQ_FAN_IN_QUEUE'),
            queueOptions: {
              durable: false
            },
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: ['FAN_IN_SERVICE'],
})
export class SharedModule {}