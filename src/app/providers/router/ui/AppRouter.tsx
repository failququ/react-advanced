import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
  <div className="page-container">
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  </div>
);

export default AppRouter;
