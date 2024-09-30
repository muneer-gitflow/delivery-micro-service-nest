import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'customer-service',
            brokers: ['kafka:29092'],
          },
          consumer: {
            groupId: 'customer-service-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}