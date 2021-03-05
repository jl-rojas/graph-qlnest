import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsService } from './items.service';
import { ItemEntity } from './items.entity';
import { ItemsResolver } from './items.resolver';

@Module({
  providers: [ItemsService, ItemsResolver],
  imports: [ TypeOrmModule.forFeature([ ItemEntity ])],
  exports: [ItemsService]
})
export class ItemsModule {}
