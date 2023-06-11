import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';
export type SizesType = 'P' | 'M' | 'G' | 'GG' | 'XG' | 'XGG'

@Entity({ name: 'item' })
export class Item extends BaseEntity {

  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;

  @Column({ type: 'varchar', length: 300 })
  image: string;

  @Column({ type: 'float'})
  price: number;

  @Column({ type: 'enum', enum: ["P","M","G","GG","XG","XGG"], default: "P", array: true })
  sizes: SizesType[];

  @Column({ type: 'varchar', length: 300 })
  author: string;

  @Column({ type: 'varchar', length: 300, array: true })
  metatags: string[];

  @Column({ type: 'varchar', length: 300 })
  slug: string;
}