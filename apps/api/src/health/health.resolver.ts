import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { HealthCheck } from './health.model';

@Resolver(() => HealthCheck)
export class HealthResolver {
  constructor(
    @Inject('CUSTOMER') private customerService: ClientProxy,
    // Add other services here as needed
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

  // Add other resolve fields for other services here
}
