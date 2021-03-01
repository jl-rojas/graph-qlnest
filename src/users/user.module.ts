import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserResolver } from './users.resolver'
import { UsersService } from './users.service'
import { UserEntity } from './users.entity'

@Module({
	imports: [ TypeOrmModule.forFeature([ UserEntity ]) ],
	providers: [ UserResolver, UsersService ]
})
export class UserModule {}