import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import Input from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'password',
    value: '123',
  },
};

export const Dark: Story = {
  args: {
    placeholder: 'password',
    value: '123',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
