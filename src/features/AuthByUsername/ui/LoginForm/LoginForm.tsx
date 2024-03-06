import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import type { FC } from 'react';
import Text from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selector/getLoginState/getLoginState';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, isLoading, error,
  } = useSelector(getLoginState);

  const handleChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const handleChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const handleLogIn = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.form, {}, [className])}>
      <Text title={t('login-modal.title')} />
      {error && <Text theme="error" text={error} />}
      <Input
        className={styles.input}
        type="text"
        placeholder={t('login-modal.login-form.placeholders.username')}
        onChange={handleChangeUsername}
        value={username}
      />
      <Input
        className={styles.input}
        type="text"
        placeholder={t('login-modal.login-form.placeholders.password')}
        onChange={handleChangePassword}
        value={password}
      />
      <Button
        className={styles.loginBtn}
        theme="outlined"
        onClick={handleLogIn}
        disabled={isLoading}
      >
        {t('login-modal.login-form.login')}
      </Button>
    </div>
  );
};

export default memo(LoginForm);
