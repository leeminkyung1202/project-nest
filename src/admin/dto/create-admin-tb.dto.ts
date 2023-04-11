import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class CreateAdminDto {
  @IsNotEmpty()
  @IsString()
  readonly a_loginid: string;

  @IsNotEmpty()
  @IsString()
  readonly a_passwd: string;

  @IsNotEmpty()
  @IsString()
  readonly a_name: string;

  @IsOptional()
  @IsInt()
  readonly a_level?: number;

  @IsNotEmpty()
  readonly a_lastlogin_at: Date;

  @IsNotEmpty()
  readonly a_created_at: Date;

  @IsNotEmpty()
  readonly a_updated_at: Date;
}
