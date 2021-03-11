import { Match, TestingContext } from 'nestjs-bdd';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SumMatcher {
  @Match(/^(.*) is (.*)$/)
  defineNumber(context: TestingContext, name: string, value: string) {
    context.setState(name, Number(value));
  }

  @Match(/^sum of (.*) and (.*) should be (.*)$/)
  assertSum(context: TestingContext, a: string, b: string, sum: string) {
    expect(context.getState(a) + context.getState(b)).toBe(Number(sum));
  }
}
