import { render, screen } from '@testing-library/react';

import Button from 'shared/ui/Button/Button';

describe('Button', () => {
  test('should render component', () => {
    const btnText = 'test';
    render(<Button>{btnText}</Button>);
    expect(screen.getByText(btnText)).toBeInTheDocument();
  });

  test('should have correct class', () => {
    const btnText = 'test';
    render(<Button theme="clean">{btnText}</Button>);
    expect(screen.getByText(btnText)).toHaveClass('clean');
  });
});
