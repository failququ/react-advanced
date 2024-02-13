import { useState, type FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';

const ErrorButton: FC = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  const handleThrow = () => setError(true);

  return (
    <Button onClick={handleThrow}>
      {t('throw-error')}
    </Button>
  );
};

export default ErrorButton;
