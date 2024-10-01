import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class HealthCheck {
  @Field(() => String, { nullable: true })
  customer?: string;

  // Add other services here as needed
  // @Field(() => String, { nullable: true })
  // delivery?: string;
}