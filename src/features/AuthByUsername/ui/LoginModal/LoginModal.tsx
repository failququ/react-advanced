import { classNames } from 'shared/lib/classNames/classNames';

import { Suspense, type FC } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import Loader from 'shared/ui/Loader/Loader';
import { LoginFormLazy } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpened?: boolean;
  onClose?: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { className, isOpened, onClose } = props;
  return (
    <Modal
      className={classNames('', {}, [className])}
      isOpened={isOpened}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormLazy />
      </Suspense>
    </Modal>
  );
};
