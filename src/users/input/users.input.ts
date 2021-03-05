import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class InputUser {
  @Field()
  readonly name!: string

  @Field()
  readonly email!: string

  @Field()
  readonly role: string
}