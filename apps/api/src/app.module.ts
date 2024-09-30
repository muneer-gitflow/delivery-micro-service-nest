import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CustomerController } from './customer.controller';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { makeHistogramProvider } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    PrometheusModule.register(),
    ClientsModule.register([
      {
        name: 'CUSTOMER_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'customer',
            brokers: ['kafka:29092'],
          },
          consumer: {
            groupId: 'customer-consumer',
          },
        },
      },
      {
        name: 'DELIVERY_BOY_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'delivery-boy',
            brokers: ['kafka:29092'],
          },
          consumer: {
            groupId: 'delivery-boy-consumer',
          },
        },
      },
      {
        name: 'DELIVERY_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'delivery-service',
            brokers: ['kafka:29092'],
          },
          consumer: {
            groupId: 'delivery-service-consumer',
          },
        },
      },
      {
        name: 'SIMULATOR_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'simulator',
            brokers: ['kafka:29092'],
          },
          consumer: {
            groupId: 'simulator-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [CustomerController],
  providers: [
    makeHistogramProvider({
      name: 'http_request_duration_seconds',
      help: 'Duration of HTTP requests in seconds',
      labelNames: ['method', 'route', 'code'],
    }),
  ],
})
export class AppModule {}