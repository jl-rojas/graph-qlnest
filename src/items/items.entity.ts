import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity('items')
export class ItemEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('varchar', { length: 50, nullable: false })
  name: string;

  @Field()
  @Column('integer', { nullable: false })
  stock: number;

  @Field()
  @Column('double', { default: 0, nullable: false })
  price: number;

  @Field()
  @Column('double', { nullable: true })
  price_preferred: number;
}
