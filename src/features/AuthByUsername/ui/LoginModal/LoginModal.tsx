import { classNames } from 'shared/lib/classNames/classNames';

import type { FC } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import LoginForm from '../LoginForm/LoginForm';

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
      <LoginForm />
    </Modal>
  );
};
