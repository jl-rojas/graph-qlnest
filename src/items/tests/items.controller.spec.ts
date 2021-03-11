import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TestingApp } from 'nestjs-bdd';
import { Repository } from 'typeorm';
import { ItemsController } from '../items.controller';
import { ItemEntity } from '../items.entity';
import { ItemsModule } from '../items.module';
import { ItemsService } from '../items.service';
import { ItemsMatcher } from './ItemsMatcher';

describe('ItemsController', () => {
  let itemsController: ItemsController;
  let itemsService: ItemsService;
  let app = new TestingApp(ItemsModule, [ItemsMatcher]);
  beforeAll(() => app.start());
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

  afterEach(() => {
    jest.resetAllMocks();
  });

  afterAll(() => app.stop());

  app.findInDir('./features');

  test('should be defined', () => {
    expect(itemsService).toBeDefined();
  });

  test('should return an array of items', async () => {
    const result = [
      {
        id: '1',
        name: 'mantecadas',
        price: 15,
        stock: 15,
        price_preferred: 10,
      },
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

  test('should return an Entity by ID', async () => {
    const expected = new ItemEntity();
    expected.id = '123-abc';
    expected.name = 'Mantecada';
    expected.price = 11;
    expected.price_preferred = 10.2;
    expected.stock = 50;
    const idtoFind = '123-abc';
    jest.spyOn(itemsService, 'getItem').mockResolvedValue(expected);
    expect(await itemsController.getItem(idtoFind)).toBe(expected);
    expect(idtoFind).toEqual(
      await (await itemsController.getItem(idtoFind)).id,
    );
  });

  test('should delete Item and return the data removed', async () => {
    var itemToDelete = {
      id: '2e322076-5712-4630-887c-03fc975947cd',
      name: 'celular',
      stock: 2,
      price: 8000,
      price_preferred: 50,
    };
    const idtoDelete = '2e322076-5712-4630-887c-03fc975947cd'; //celular
    jest.spyOn(itemsService, 'deleteItem').mockResolvedValue(itemToDelete);
    expect(await itemsController.deleteItem(idtoDelete)).toEqual(itemToDelete);
  });

  test('should update Item and return the new data', async () => {
    const idtoUpdate = '2e322076-5712-4630-887c-03fc975947cd'; //celular
    var itemToUpdate = {
      id: idtoUpdate,
      name: 'celular',
      stock: 2,
      price: 8000,
      price_preferred: 50,
    };
    var updated = {
      name: 'mantecada',
      stock: 20,
      price: 10,
      price_preferred: 5.2,
    };
    jest.spyOn(itemsService, 'updateItem').mockResolvedValue(updated);
    jest
      .spyOn(itemsService, 'getItem')
      .mockResolvedValue({ id: idtoUpdate, ...updated });
    const updatedItem = { id: idtoUpdate, ...updated };
    expect(await itemsController.getItem(idtoUpdate)).toEqual(updatedItem);
    expect(await itemsController.updateItem(idtoUpdate, updated)).not.toEqual(
      itemToUpdate,
    );
  });
});
