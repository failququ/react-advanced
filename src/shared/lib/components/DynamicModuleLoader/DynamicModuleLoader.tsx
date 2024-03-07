import { useDispatch, useStore } from 'react-redux';

import { StoreWithManager } from 'app/providers/StoreProvider';
import { useEffect, type FC } from 'react';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children, reducers, removeAfterUnmount,
  } = props;

  const dispatch = useDispatch();

  const store = useStore() as StoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT reducer with name - ${name}` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROYED reducer with name - ${name}` });
        });
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};

export default DynamicModuleLoader;
