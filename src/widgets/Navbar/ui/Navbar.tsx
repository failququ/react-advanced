import { classNames } from 'shared/lib/classNames/classNames';
import type { FC } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      <div className={styles.links} />
    </div>
  );
};

export default Navbar;
