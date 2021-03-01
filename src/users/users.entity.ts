import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('user')
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