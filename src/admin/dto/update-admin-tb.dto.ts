import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin-tb.dto';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {}
