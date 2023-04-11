import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminTb } from './entities/admin-tb.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminTb])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
