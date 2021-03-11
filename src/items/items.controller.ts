import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  async getItems() {
    return await this.itemService.getItems();
  }

  @Get(':id')
  async getItem(@Param() params) {
    const { id } = params;
    return await this.itemService.getItem(id);
  }

  @Delete(':id')
  async deleteItem(@Param() params) {
    return await this.itemService.deleteItem(params.id);
  }

  @Post()
  async createNewItem(@Body() data) {
    return await this.itemService.createItem(data);
  }

  @Put(':id')
  async updateItem(@Param() params, @Body() body) {
    return await this.itemService.updateItem(params.id, body);
  }
}
