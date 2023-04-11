import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin-tb.dto';
import { UpdateAdminDto } from './dto/update-admin-tb.dto';
import { AdminTb } from './entities/admin-tb.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminTb)
    private adminRepository: Repository<AdminTb>,
  ) {}

  findAll(): Promise<AdminTb[]> {
    return this.adminRepository.find();
  }

  findOne(id: number): Promise<AdminTb> {
    return this.adminRepository.findOneBy({ a_id: id });
  }

  async create(admin: CreateAdminDto) {
    await this.adminRepository.save(admin);
  }

  async update(id: number, admin: UpdateAdminDto) {
    const prevAdmin = await this.findOne(id);
    const adminToUpdate = { ...prevAdmin, ...admin };
    await this.adminRepository.save(adminToUpdate);
  }

  async remove(id: number): Promise<void> {
    const result = await this.adminRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Admin with id ${id['a_id']}`);
    }
  }
}
