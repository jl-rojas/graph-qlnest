import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Args } from '@nestjs/graphql';
import { InputItem, InputUpdateItem } from './inputs/items.input';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  async getItems() {
    return await this.itemService.getItems();
  }

  @Get(':id')
  async getItem(@Args(':id') id: String) {
    return await this.itemService.getItem(id);
  }

  @Delete(':id')
  async deleteItem(@Args('id') id: String) {
    return await this.itemService.deleteItem(id);
  }

  @Post()
  async createNewItem(@Args('data') data: InputItem) {
    return await this.itemService.createItem(data);
  }

  @Put(':id')
  async updateItem(
    @Args('id') id: string,
    @Args('item') item: InputUpdateItem,
  ) {
    console.log(id);
    console.log(item);
    return await this.itemService.updateItem(id, item);
  }
}
