import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Entity, Repository } from 'typeorm';

import { ItemDTO } from './dto/items.dto';
import { InputItem } from './inputs/items.input';
import { ItemEntity } from './items.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemEntity) private readonly itemRepository: Repository<ItemEntity>)
  { }

  async getItems () {
		return await this.itemRepository.find()
  }
  
  async getItem(id: any) {
    return await this.itemRepository.findOne(id);
  }

  async updateItem({ id, name, stock, price, price_preferred }: ItemDTO): Promise<void>{
    await this.itemRepository.update(id, { name, stock, price, price_preferred });
  }

  async deleteItem({ id }: ItemDTO): Promise<void>{
    await this.itemRepository.delete(id);
  }

  async createItem (data: ItemDTO): Promise<ItemEntity> {
    let item = new ItemEntity();
    item.name = data.name;
    item.stock = data.stock;
    item.price = data.price;
    item.price_preferred = data.price_preferred || 0;
    await this.itemRepository.save(item);
    return item;
  }
}
