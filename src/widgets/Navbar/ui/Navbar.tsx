import { useState, type FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import Modal from 'shared/ui/Modal/Modal';
import Button from 'shared/ui/Button/Button';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      <Button className={styles.links} theme="cleanInverted" onClick={onToggleModal}>
        {t('navbar.login')}
      </Button>
      <Modal isOpened={isAuthModal} onClose={onToggleModal}>{t('modal')}</Modal>

    </div>
  );
};

export default Navbar;
