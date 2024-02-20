import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice', () => {
  test('decrement action', () => {
    const state: CounterSchema = { value: 5 };

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 4 });
  });

  test('increment action', () => {
    const state: CounterSchema = { value: 5 };

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 6 });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
