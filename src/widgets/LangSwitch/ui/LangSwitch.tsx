import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button/Button';

import type { FC } from 'react';

interface Props {
  className?: string;
  short?: boolean;
}

const LangSwitch: FC<Props> = (props) => {
  const { className, short } = props;
  const { t, i18n } = useTranslation();

  const handleChangeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme="clean"
      onClick={handleChangeLang}
    >
      {short ? t('change-lang-short') : t('change-lang')}
    </Button>
  );
};

export default LangSwitch;
