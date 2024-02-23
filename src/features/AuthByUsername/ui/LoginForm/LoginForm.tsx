import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import type { FC } from 'react';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.form, {}, [className])}>
      <Input className={styles.input} type="text" placeholder={t('login-modal.login-form.placeholders.username')} />
      <Input className={styles.input} type="text" placeholder={t('login-modal.login-form.placeholders.password')} />
      <Button className={styles.loginBtn}>{t('login-modal.login-form.login')}</Button>
    </div>
  );
};

export default LoginForm;
