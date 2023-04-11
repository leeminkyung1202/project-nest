import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GoodsDto } from './dto/goods.dto';
import { InputGoods } from './dto/goods.input';
import { GoodsService } from './goods.service';

@Resolver('Goods')
export class GoodsResolver {
  constructor(private readonly goodsSetvice: GoodsService) {}

  @Query(() => [GoodsDto])
  async getGoods() {
    return await this.goodsSetvice.getGoods();
  }

  @Mutation(() => GoodsDto)
  async createGoods(@Args('data') data_input: InputGoods) {
    return await this.goodsSetvice.createGoods(data_input);
  }
}
