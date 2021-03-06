import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ObjectType } from '@nestjs/graphql';

@Entity('user')
@ObjectType()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

	@Column('varchar', { length: 50, unique: true })
  name: string
  
	@Column('varchar', { length: 100, unique: true })
	email: string

	@Column('varchar', { length: 1 })
	role: string
}