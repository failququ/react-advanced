import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import UILink from 'shared/ui/UILink/UILink';
import type { FC } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      <div className={styles.links}>
        <UILink theme="secondary" to="/">{t('links.main')}</UILink>
        <UILink theme="secondary" to="/about">{t('links.about')}</UILink>
      </div>
    </div>
  );
};

export default Navbar;
