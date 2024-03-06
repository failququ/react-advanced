import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/storeDecorator';
import LoginForm from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
  decorators: [StoreDecorator({ loginForm: { username: '123', password: 'asd' } })],
};

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ loginForm: { username: '123', password: 'asd' } })],
};

export const WithError: Story = {
  args: {
  },
  decorators: [StoreDecorator({ loginForm: { username: '123', password: 'asd', error: 'An error ocurred' } })],
};

export const WhileLoading: Story = {
  args: {
  },
  decorators: [StoreDecorator({ loginForm: { username: '123', password: 'asd', isLoading: true } })],
};
