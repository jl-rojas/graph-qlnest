import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class InputItem{
  @Field()
  readonly name: string

  @Field()
  readonly stock: number
  
  @Field()
  readonly price: number
}