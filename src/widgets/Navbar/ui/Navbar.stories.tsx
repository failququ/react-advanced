import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/storeDecorator';
import Navbar from './Navbar';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/themeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
  decorators: [StoreDecorator({ user: { authData: {} } })],
};

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })],
};
