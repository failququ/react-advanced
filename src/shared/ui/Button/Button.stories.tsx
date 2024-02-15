import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import Button from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'TEXT',
  },
};

export const Clean: Story = {
  args: {
    children: 'TEXT',
    theme: 'clean',
  },
};

export const Outlined: Story = {
  args: {
    children: 'TEXT',
    theme: 'outlined',
  },
};

export const OutlinedMedium: Story = {
  args: {
    children: 'TEXT',
    theme: 'outlined',
    size: 'medium',
  },
};

export const OutlinedLarge: Story = {
  args: {
    children: 'TEXT',
    theme: 'outlined',
    size: 'large',
  },
};

export const OutlinedDark: Story = {
  args: {
    children: 'TEXT',
    theme: 'outlined',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Filled: Story = {
  args: {
    children: 'TEXT',
    theme: 'filled',
  },
};

export const FilledInverted: Story = {
  args: {
    children: 'TEXT',
    theme: 'filledInverted',
  },
};

export const SquareSmall: Story = {
  args: {
    children: '>',
    theme: 'filledInverted',
    square: true,
    size: 'small',
  },
};

export const SquareMedium: Story = {
  args: {
    children: '>',
    theme: 'filledInverted',
    square: true,
    size: 'medium',
  },
};

export const SquareLarge: Story = {
  args: {
    children: '>',
    theme: 'filledInverted',
    square: true,
    size: 'large',
  },
};
