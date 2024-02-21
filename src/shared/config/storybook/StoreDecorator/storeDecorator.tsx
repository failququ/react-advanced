import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (Story: Story) => (

  <StoreProvider>
    <Story />
  </StoreProvider>

);
