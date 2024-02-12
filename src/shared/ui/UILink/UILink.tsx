import { LinkProps, Link } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';
import styles from './UILink.module.scss';

import type { FC } from 'react';

type LinkTheme = 'primary' | 'secondary';

interface UILinkProps extends LinkProps {
  className?: string;
  theme?: LinkTheme;
}

const UILink: FC<UILinkProps> = (props) => {
  const {
    className, children, to, theme = 'primary', ...restProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(
        styles.link,
        {
          [styles.primary]: theme === 'primary',
          [styles.secondary]: theme === 'secondary',
        },
        [className],
      )}
      {...restProps}
    >
      {children}
    </Link>
  );
};

export default UILink;
