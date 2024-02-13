import { classNames } from 'shared/lib/classNames/classNames';

import type { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

type ButtonTheme = 'clean' | 'outlined';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme, ...restProps
  } = props;
  return (
    <button
      type="button"
      className={
        classNames(
          styles.button,
          {
            [styles.clean]: theme === 'clean',
            [styles.outlined]: theme === 'outlined',
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
