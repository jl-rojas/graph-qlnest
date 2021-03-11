import { Match, TestingContext } from 'nestjs-bdd';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsMatcher {
  private items = [
    {
      id: '123',
      name: 'Mantecadas',
      stock: 5,
      price: 10,
      price_preferred: 10,
    },
    {
      id: '456',
      name: 'Gansito',
      stock: 50,
      price: 1,
      price_preferred: 1.1,
    },
    {
      id: '789',
      name: 'Refresco de manzana',
      stock: 500,
      price: 20,
      price_preferred: 10,
    },
  ];
  //Get All Items
  @Match('User want all Items')
  defineService(context: TestingContext) {
    context.setState('service', 'all');
  }

  @Match('result should be an array of Items')
  getResult(context: TestingContext) {
    expect(context.getState('service')).toBe('all');
    expect(this.items).not.toBeNull();
  }

  //Get/Update/Delete One Item
  @Match(/^User want to (.*) an Item$/)
  defineAction(context: TestingContext, action: string) {
    context.setState('action', action);
  }

  @Match('Items array is not null')
  verifyContent() {
    expect(this.items).not.toBeNull();
  }

  @Match(/^(.*) like id of the Item$/)
  getIdentifier(context: TestingContext, id: string) {
    context.setState('id', id);
  }

  @Match(/^name (.*) like data of the Item$/)
  getData(context: TestingContext, name: string) {
    context.setState('name', name);
  }

  @Match(/^result be an Item (.*)$/)
  executeActions(context: TestingContext, resultingAction: string) {
    if (context.getState('action') === 'get') {
      for (const item of this.items) {
        if (item.id === context.getState('id')) {
          expect(item.id).toEqual(context.getState('id'));
          break;
        }
      }
    }
    if (context.getState('action') === 'delete') {
      const newItems = this.items.filter((value, index, arr) => {
        return value.id !== context.getState('id');
      });
      expect(this.items).not.toEqual(newItems);
    }
    if (context.getState('action') === 'update') {
      for (const item of this.items) {
        if (item.id === context.getState('id')) {
          item.name = context.getState('name');
          expect(item.name).toEqual(context.getState('name'));
          break;
        }
      }
    }
    expect(selectAction(context.getState('action'))).toBe(resultingAction);
  }
}

const selectAction = (action: string) => {
  switch (action) {
    case 'get':
      return 'returned';
    case 'update':
      return 'updated';
    case 'delete':
      return 'deleted';
    default:
      break;
  }
};
