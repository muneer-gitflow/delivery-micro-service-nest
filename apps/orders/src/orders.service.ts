import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  private orders = [
    { id: '1', customerId: '1', status: 'PENDING', createdAt: new Date(), updatedAt: new Date() },
    { id: '2', customerId: '2', status: 'DELIVERED', createdAt: new Date(), updatedAt: new Date() },
    { id: '3', customerId: '3', status: 'DELIVERED', createdAt: new Date(), updatedAt: new Date() },
    { id: '4', customerId: '4', status: 'DELIVERED', createdAt: new Date(), updatedAt: new Date() },
    { id: '5', customerId: '5', status: 'DELIVERED', createdAt: new Date(), updatedAt: new Date() },
  ];

  getOrders() {
    return this.orders;
  }

  getOrder(id: string) {
    return this.orders.find(order => order.id === id);
  }
}