import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class InputGoods {
  @Field()
  readonly g_name!: string;

  @Field()
  readonly g_price!: number;

  @Field()
  readonly g_qty!: number;

  @Field(() => Int)
  readonly g_is_active!: number;
}
