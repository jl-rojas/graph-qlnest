import { Field, ObjectType, ID, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class ItemDTO{
  @Field(() => ID)
  readonly id?: string
  @Field()
  readonly name!: string
  @Field(() => Int)
  readonly stock!: number
  @Field(() => Float)
  readonly price!: number
  @Field(() => Float)
  readonly price_preferred?: number
}