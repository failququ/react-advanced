import { classNames } from 'shared/lib/classNames/classNames';

import type { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

type ButtonTheme = 'clean' | 'outlined' | 'filled' | 'filledInverted' | 'cleanInverted';

type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, square, size = 'small', ...restProps
  } = props;
  return (
    <button
      type="button"
      className={
        classNames(
          styles.button,
          {
            [styles.clean]: theme === 'clean',
            [styles.cleanInverted]: theme === 'cleanInverted',
            [styles.outlined]: theme === 'outlined',
            [styles.filled]: theme === 'filled',
            [styles.filledInverted]: theme === 'filledInverted',
            [styles.square]: square,
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large',
          },
          [className],
        )
}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
