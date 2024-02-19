import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/themeDecorator';
import Modal from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam illo inventore quasi magni, magnam alias autem aliquam natus asperiores deserunt!',
    isOpened: true,
  },
};

export const Dark: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam illo inventore quasi magni, magnam alias autem aliquam natus asperiores deserunt!',
    isOpened: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
