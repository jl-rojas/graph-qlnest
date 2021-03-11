import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsService } from './items.service';
import { ItemEntity } from './items.entity';
import { ItemsResolver } from './items.resolver';
import { ItemsController } from './items.controller';
import ormConfig from '../../ormconfig';

@Module({
  providers: [ItemsService, ItemsResolver],
  imports: [
    TypeOrmModule.forFeature([ItemEntity]),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '',
    //   database: 'nest',
    //   entities: [ItemEntity],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      ...ormConfig,
      entities: [ItemEntity],
    }),
  ],
  exports: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
