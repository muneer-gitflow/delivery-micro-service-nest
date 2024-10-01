import { Resolver, Query } from '@nestjs/graphql';
import { Customer } from './customer.model';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Resolver((of) => Customer)
export class CustomersResolver {
  constructor(@Inject('CUSTOMER') private customerService: ClientProxy) {}

  @Query((returns) => [Customer])
  async customers(): Promise<Customer[]> {
    const customers = await lastValueFrom(
      this.customerService.send({ cmd: 'get_customers' }, {}),
    );
    return customers;
  }
}
