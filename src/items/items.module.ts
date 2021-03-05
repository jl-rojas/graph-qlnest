import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsService } from './items.service';
import { ItemEntity } from './items.entity';
import { ItemsResolver } from './items.resolver';
import { ItemsController } from './items.controller';

@Module({
  providers: [ItemsService, ItemsResolver],
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  exports: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
