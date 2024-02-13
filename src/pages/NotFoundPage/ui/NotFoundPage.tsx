import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import type { FC } from 'react';
import styles from './NotFoundPage.module.scss';

interface Props {
  className?: string;
}

const NotFoundPage: FC<Props> = (props) => {
  const { className } = props;
  const { t } = useTranslation('not-found-page');
  return (
    <div className={classNames(styles.page, {}, [className])}>
      {t('title')}
    </div>
  );
};

export default NotFoundPage;
