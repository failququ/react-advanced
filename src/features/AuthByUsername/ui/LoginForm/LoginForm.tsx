import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import type { FC } from 'react';
import Text from 'shared/ui/Text/Text';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selector/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selector/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selector/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selector/getLoginError/getLoginError';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import styles from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

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
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
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
    </DynamicModuleLoader>
  );
};

export default memo(LoginForm);
