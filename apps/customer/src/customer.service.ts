import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  private customers = [
    { id: '1', name: 'Alice Johnson', email: 'alice@example.com' },
    { id: '2', name: 'Bob Smith', email: 'bob@example.com' },
    { id: '3', name: 'Charlie Brown', email: 'charlie@example.com' },
  ];

  getCustomers() {
    return this.customers;
  }
}