import { useState, type FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      <Button className={styles.links} theme="cleanInverted" onClick={handleShowModal}>
        {t('navbar.login')}
      </Button>
      <LoginModal isOpened={isAuthModal} onClose={handleCloseModal} />
    </div>
  );
};

export default Navbar;
