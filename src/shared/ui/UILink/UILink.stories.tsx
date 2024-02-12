import type { Meta, StoryObj } from '@storybook/react';

import UILink from './UILink';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';


const meta = {
  title: 'shared/UILink',
  component: UILink,
  args: {
    to: '/'
  }
} satisfies Meta<typeof UILink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'TEXT',
    theme: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    children: 'TEXT',
    theme: 'secondary'
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'TEXT',
    theme: 'primary'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

export const SecondaryDark: Story = {
  args: {
    children: 'TEXT',
    theme: 'secondary'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
};

