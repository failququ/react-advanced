import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import ThemeDark from 'shared/assets/icons/theme-dark.svg';
import ThemeLight from 'shared/assets/icons/theme-light.svg';
import Button from 'shared/ui/Button/Button';
import styles from './ThemeSwitch.module.scss';
import type { FC } from 'react';

interface Props {
  className?: string;
}

const ThemeSwitch: FC<Props> = (props) => {
  const { className } = props;
  const { theme, switchTheme } = useTheme();

  return (
    <Button
      onClick={switchTheme}
      className={classNames(styles.switch, {}, [className])}
      theme="clean"
    >
      {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight /> }
    </Button>
  );
};

export default ThemeSwitch;
