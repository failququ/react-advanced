import type { Meta, StoryObj } from '@storybook/react';

import ErrorFallback from './ErrorFallback';
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/themeDecorator';
import { Theme } from '../../../app/providers/ThemeProvider';

const meta = {
  title: 'widget/ErrorFallback',
  component: ErrorFallback,
} satisfies Meta<typeof ErrorFallback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
};

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
