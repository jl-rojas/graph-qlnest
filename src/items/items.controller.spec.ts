import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemsController } from './items.controller';
import { ItemEntity } from './items.entity';
import { ItemsService } from './items.service';

describe('ItemsController', () => {
  let itemsController: ItemsController;
  let itemsService: ItemsService;
  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [
        ItemsService,
        {
          provide: getRepositoryToken(ItemEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    itemsService = moduleRef.get<ItemsService>(ItemsService);
    itemsController = moduleRef.get<ItemsController>(ItemsController);
  });

  test('should be defined', () => {
    expect(itemsService).toBeDefined();
  });

  it('should return an array of items', async () => {
    const result = [
      {
        id: '1',
        name: 'mantecadas',
        price: 15,
        stock: 15,
        price_preferred: 10,
      },
    ];

    jest.spyOn(itemsService, 'getItems').mockResolvedValue(result);

    expect(await itemsController.getItems()).toBe(result);
  });
});
