import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GoodsDto } from './dto/goods.dto';
import { GoodsTb } from './entities/goods-tb.entity';

@Injectable()
export class GoodsService {
  constructor(
    @InjectRepository(GoodsTb)
    private readonly goodsRepository: Repository<GoodsTb>,
  ) {}

  async createGoods(data_input: GoodsDto) {
    return await this.goodsRepository.create(data_input).save();
  }

  async getGoods() {
    return await this.goodsRepository.find();
  }
}
