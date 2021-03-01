import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CreateUserDto {
  @Field()
  readonly id?: string
  
  @Field()
  readonly name: string
  
  @Field()
  readonly email: string
  
  @Field()
  readonly role: string
  
}