import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GoodsTb extends BaseEntity {
  @PrimaryGeneratedColumn()
  g_id: number;

  @Column({ nullable: false })
  g_name: string;

  @Column({ type: 'int' })
  g_price: number;

  @Column({ type: 'int' })
  g_qty: number;

  @Column({ type: 'tinyint', default: 1 })
  g_is_active: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  g_created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  g_updated_at: Date;
}
