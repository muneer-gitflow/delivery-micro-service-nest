import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class HealthCheck {
  @Field(() => String, { nullable: true })
  customer?: string;

  @Field(() => String, { nullable: true })
  delivery?: string;
}