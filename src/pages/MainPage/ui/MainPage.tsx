import { useTranslation } from 'react-i18next';

import { ErrorButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

const MainPage = () => {
  const { t } = useTranslation('main-page');
  return (
    <div>
      <ErrorButton />
      {t('title')}
      <Counter />
    </div>
  );
};

export default MainPage;
