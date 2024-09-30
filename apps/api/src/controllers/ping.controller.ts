import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClientKafka, Client, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@ApiTags('ping')
@Controller('ping')
export class PingController implements OnModuleInit {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'api',
        brokers: ['kafka:29092'],
      },
      consumer: {
        groupId: 'api-consumer',
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf('ping.customer');
    this.client.subscribeToResponseOf('ping.delivery');
    await this.client.connect();
  }

  @Get('customer')
  pingCustomer(): Observable<string> {
    return this.client.send('ping.customer', 'Ping from API');
  }

  @Get('delivery')
  pingDelivery(): Observable<string> {
    return this.client.send('ping.delivery', 'Ping from API');
  }
}