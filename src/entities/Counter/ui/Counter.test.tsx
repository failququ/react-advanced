import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import Counter from './Counter';

describe('Counter', () => {
  test('should render component with correct state value', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 5 } },
    });
    expect(screen.getByTestId('counter-title')).toHaveTextContent('5');
  });

  test('should increment counter state on btn click', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 5 } },
    });
    const incrementBtn = screen.getByTestId('increment-btn');
    fireEvent.click(incrementBtn);

    expect(screen.getByTestId('counter-title')).toHaveTextContent('6');
  });

  test('should decrement counter state on btn click', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 5 } },
    });
    const decrementBtn = screen.getByTestId('decrement-btn');
    fireEvent.click(decrementBtn);

    expect(screen.getByTestId('counter-title')).toHaveTextContent('4');
  });
});
