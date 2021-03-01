import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UserEntity } from './users.entity'
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
import { InputUser } from './input/users.input'

@Resolver((of) => UserEntity)
export class UserResolver {
	constructor (private readonly userService: UsersService) {}

	@Query(() => [ CreateUserDto ])
	async users () {
		return this.userService.getUsers()
	}

	@Mutation(() => CreateUserDto)
	async createUser (@Args('data') data: InputUser) {
		return this.userService.createUser(data)
	}
}