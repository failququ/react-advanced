import { classNames } from 'shared/lib/classNames/classNames';

import type { FC } from 'react';
import styles from './Text.module.scss';

type TextTheme = 'primary' | 'error'

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

const Text: FC<TextProps> = (props) => {
  const {
    className, title, text, theme = 'primary',
  } = props;
  return (
    <div className={classNames(styles.wrapper, {
      [styles.error]: theme === 'error',
    }, [className])}
    >
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};

export default Text;
