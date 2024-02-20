import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Button from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="counter-title">
        {counterValue}
      </h1>
      <Button data-testid="increment-btn" onClick={increment}>{t('counter.increment')}</Button>
      <Button data-testid="decrement-btn" onClick={decrement}>{t('counter.decrement')}</Button>
    </div>
  );
};

export default Counter;
