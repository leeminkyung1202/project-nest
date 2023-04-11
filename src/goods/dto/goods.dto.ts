import { Field, ObjectType } from '@nestjs/graphql';
import { Int } from 'type-graphql';

@ObjectType()
export class GoodsDto {
  @Field()
  readonly g_id?: string;

  @Field()
  readonly g_name!: string;

  @Field()
  readonly g_price!: number;

  @Field()
  readonly g_qty!: number;

  @Field(() => Int)
  readonly g_is_active!: number;
}
