import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import Button from "shared/ui/Button/Button";
import styles from "./ErrorFallback.module.scss";

import type { FC } from "react";

interface Props {
  className?: string;
}

  const ErrorFallback: FC<Props> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const handleRefresh = () => {
    location.reload();
  }

    return (
      <div className={classNames(styles.page, {}, [className])}>
        <div>
        <p>{t('error')}</p>
        <Button className={styles.refreshBtn} onClick={handleRefresh}>{t('refresh-page')}</Button>
        </div>
      </div>
    );
  };

export default ErrorFallback;