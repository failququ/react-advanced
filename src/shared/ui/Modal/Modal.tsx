import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import type { FC, ReactNode } from 'react';

import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpened?: boolean;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const {
    className, children, isOpened, onClose,
  } = props;

  const ANIMATION_DELAY = 150;

  const { theme } = useTheme();
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const handleCloseModal = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  }, [handleCloseModal]);

  const handleClickContent = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpened) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpened, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(styles.modal, {
        [styles.opened]: isOpened,
        [styles.dark]: theme === 'dark',
        [styles.light]: theme === 'light',
      }, [className])}
      >
        <div className={styles.overlay} onClick={handleCloseModal}>
          <div
            className={classNames(styles.content, {
              [styles.opened]: isOpened,
              [styles.closing]: isClosing,
            }, [])}
            onClick={handleClickContent}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
