import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { HealthCheck } from './health.model';

@Resolver(() => HealthCheck)
export class HealthResolver {
  constructor(
    @Inject('CUSTOMER') private customerService: ClientProxy,
    @Inject('DELIVERY') private deliveryService: ClientProxy,
  ) {}

  @Query(() => HealthCheck)
  healthCheck() {
    return {};
  }

  @ResolveField()
  async customer(@Parent() healthCheck: HealthCheck): Promise<string> {
    try {
      const result = await lastValueFrom(
        this.customerService.send({ cmd: 'customer_ping' }, {}),
      );
      return result;
    } catch (error) {
      console.error('Health check failed for customer service:', error);
      return 'Customer service is Unhealthy';
    }
  }

  @ResolveField()
  async delivery(@Parent() healthCheck: HealthCheck): Promise<string> {
    try {
      const result = await lastValueFrom(
        this.deliveryService.send({ cmd: 'delivery_ping' }, {}),
      );
      return result;
    } catch (error) {
      console.error('Health check failed for delivery service:', error);
      return 'Delivery service is Unhealthy';
    }
  }

  // Add other resolve fields for other services here
}
