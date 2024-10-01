import { Injectable } from '@nestjs/common';

@Injectable()
export class DeliveryService {
  private deliveries = [
    { id: '1', orderId: 'ORD001', status: 'In Transit' },
    { id: '2', orderId: 'ORD002', status: 'Delivered' },
    { id: '3', orderId: 'ORD003', status: 'Pending' },
  ];

  getDeliveries() {
    return this.deliveries;
  }
}