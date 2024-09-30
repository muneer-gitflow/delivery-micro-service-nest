import { Injectable } from '@nestjs/common';

@Injectable()
export class DeliveryBoyService {
  getHello(): string {
    return 'Hello World!';
  }
}
