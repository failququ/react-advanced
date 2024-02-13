import type { Meta, StoryObj } from '@storybook/react';

import Sidebar from './Sidebar';
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator/themeDecorator';
import { Theme } from '../../../../app/providers/ThemeProvider';
import { TranslationDecorator } from '../../../../shared/config/storybook/TranslationDecorator/translationDecorator';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
};

export const Dark: Story = {
  args: {
  },
  decorators: [ThemeDecorator(Theme.DARK), TranslationDecorator],
};
