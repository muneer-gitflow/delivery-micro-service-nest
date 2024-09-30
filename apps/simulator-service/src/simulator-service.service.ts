import { Injectable } from '@nestjs/common';

@Injectable()
export class SimulatorServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
