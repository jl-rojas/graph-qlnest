import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserResolver } from './users.resolver'
import { UsersService } from './users.service'
import { UserEntity } from './users.entity'
import { AuthzModule } from 'src/authz/authz.module'

@Module({
	imports: [ TypeOrmModule.forFeature([ UserEntity ]), AuthzModule],
	providers: [ UserResolver, UsersService ]
})
export class UserModule {}