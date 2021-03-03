import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common';
import { UserEntity } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { InputUser } from './input/users.input';
import { GqlAuthGuard } from '../authz/auth.guard';
@Resolver((of) => UserEntity)
export class UserResolver {
	constructor (private readonly userService: UsersService) {}

  @Query(() => [CreateUserDto])
    @UseGuards(GqlAuthGuard)
	async users () {
		return this.userService.getUsers()
	}

	@Mutation(() => CreateUserDto)
	async createUser (@Args('data') data: InputUser) {
		return this.userService.createUser(data)
	}
}