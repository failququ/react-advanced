import type { Preview } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/styleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/themeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/routerDecorator/routerDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/translationDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator, TranslationDecorator],
};

export default preview;
