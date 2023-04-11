import { Module } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsResolver } from './goods.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoodsTb } from './entities/goods-tb.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GoodsTb])],
  providers: [GoodsService, GoodsResolver],
})
export class GoodsModule {}
