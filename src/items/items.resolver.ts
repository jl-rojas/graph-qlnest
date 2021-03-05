import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ItemEntity } from './items.entity';
import { ItemDTO } from './dto/items.dto';
import { ItemsService } from './items.service';
import { InputItem, InputUpdateItem } from './inputs/items.input';
import { GqlAuthGuard } from '../auth/graphql-auth.guard';

@Resolver((of) => ItemEntity)
export class ItemsResolver {
  constructor(private readonly itemService: ItemsService) {}

  @Query(() => [ItemDTO])
  async items() {
    return await this.itemService.getItems();
  }

  @Query(() => ItemDTO)
  async item(@Args('id', { type: () => String }) id: ItemDTO) {
    return await this.itemService.getItem(id);
  }

  @Mutation(() => ItemDTO)
  async updateItem(
    @Args('id') id: string,
    @Args('item') item: InputUpdateItem,
  ) {
    return await this.itemService.updateItem(id, item);
  }

  @Mutation(() => ItemDTO)
  async deleteItem(@Args('id') id: String) {
    return await this.itemService.deleteItem(id);
  }

  @Mutation(() => ItemDTO)
  async createNewItem(@Args('data') data: InputItem) {
    return await this.itemService.createItem(data);
  }
}
