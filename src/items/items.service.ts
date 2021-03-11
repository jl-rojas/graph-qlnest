import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ItemDTO } from './dto/items.dto';
import { ItemEntity } from './items.entity';
import { InputUpdateItem } from './inputs/items.input';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemEntity)
    private readonly itemRepository: Repository<ItemEntity>,
  ) {}

  async getItems() {
    return await this.itemRepository.find();
  }

  getItem(id: any): Promise<ItemEntity> {
    return this.itemRepository.findOne({
      where: {
        id,
      },
    });
  }

  async updateItem(id: string, item: InputUpdateItem): Promise<ItemDTO> {
    await this.itemRepository.update(id, { ...item });
    return this.itemRepository.findOne({
      where: {
        id,
      },
    });
  }

  async deleteItem(id: any): Promise<any> {
    let item = this.itemRepository.findOne({
      where: {
        id,
      },
    });
    await this.itemRepository.delete({
      id,
    });
    return item;
  }

  async createItem(data: ItemDTO): Promise<ItemEntity> {
    let item = new ItemEntity();
    item.name = data.name;
    item.stock = data.stock;
    item.price = data.price;
    item.price_preferred = data.price_preferred || 0;
    await this.itemRepository.save(item);
    return item;
  }
}
