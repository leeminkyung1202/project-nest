import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin-tb.dto';
import { UpdateAdminDto } from './dto/update-admin-tb.dto';
import { AdminTb } from './entities/admin-tb.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getAll(): Promise<AdminTb[]> {
    return this.adminService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<AdminTb> {
    return this.adminService.findOne(id);
  }

  @Post()
  createAdmin(@Body() admin: CreateAdminDto) {
    return this.adminService.create(admin);
  }

  @Patch(':id')
  updateOne(@Param('id') id: number, @Body() admin: UpdateAdminDto) {
    return this.adminService.update(id, admin);
  }

  @Delete(':a_id')
  removeOne(@Param() a_id: number): Promise<void> {
    return this.adminService.remove(a_id);
  }
}
