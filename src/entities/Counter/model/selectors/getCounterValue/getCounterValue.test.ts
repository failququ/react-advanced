import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from './getCounterValue';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 5 },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(5);
  });
});
