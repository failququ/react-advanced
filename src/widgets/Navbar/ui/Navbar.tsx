import { useState, type FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const authData = useSelector(getUserAuthData);

  const [isAuthModal, setIsAuthModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const handleShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.wrapper, {}, [className])}>
        <Button className={styles.links} theme="cleanInverted" onClick={handleLogout}>
          {t('navbar.logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.wrapper, {}, [className])}>
      <Button className={styles.links} theme="cleanInverted" onClick={handleShowModal}>
        {t('navbar.login')}
      </Button>
      {isAuthModal && <LoginModal isOpened={isAuthModal} onClose={handleCloseModal} />}
    </div>
  );
};

export default Navbar;
