import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';


const meta = {
  title: 'shared/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'TEXT'
  },
};

export const Clean: Story = {
  args: {
    children: 'TEXT',
    theme: 'clean'
  },
};

export const Outlined: Story = {
  args: {
    children: 'TEXT',
    theme: 'outlined'
  },
};

export const OutlinedDark: Story = {
  args: {
    children: 'TEXT',
    theme: 'outlined'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

