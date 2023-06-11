import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';
export type sizesType = 'P' | 'M' | 'G' | 'GG' | 'XG' | 'XGG'

@Entity({ name: 'item' })
export class Item extends BaseEntity {

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'varchar', length: 300 })
  image: string;

  @Column({ type: 'number', length: 300 })
  price: number;

  @Column({ type: 'enum', enum: ["P","M","G","GG","XG","XGG"], default: "P" })
  sizes: sizesType;

  @Column({ type: 'varchar', length: 300 })
  author: string;

  @Column({ type: 'varchar', length: 300 })
  metatags: string;

  @Column({ type: 'varchar', length: 300 })
  slug: string;
}