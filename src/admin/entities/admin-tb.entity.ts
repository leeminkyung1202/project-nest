import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AdminTb {
  @PrimaryGeneratedColumn()
  a_id: number;

  @Column({ length: 30 })
  a_loginid: string;

  @Column({ length: 100 })
  a_passwd: string;

  @Column({ length: 50 })
  a_name: string;

  @Column({ unsigned: true, default: 5 })
  a_level: number;

  @Column({ type: 'datetime' })
  a_lastlogin_at: Date;

  @Column({ type: 'datetime' })
  a_created_at: Date;

  @Column({ type: 'datetime' })
  a_updated_at: Date;
}
