import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import Text from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'title',
    text: 'text',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'title',
    text: 'text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithTitleOnly: Story = {
  args: {
    title: 'title',
  },
};

export const WithTextOnly: Story = {
  args: {
    text: 'text',
  },
};

export const Error: Story = {
  args: {
    title: 'title',
    text: 'text',
    theme: 'error',
  },
};
