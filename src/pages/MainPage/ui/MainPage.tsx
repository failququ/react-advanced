import { useTranslation } from 'react-i18next';

import { ErrorButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
  const { t } = useTranslation('main-page');
  return (
    <div>
      <ErrorButton />
      {t('title')}
    </div>
  );
};

export default MainPage;
