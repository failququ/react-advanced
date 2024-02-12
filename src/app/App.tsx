import { Suspense } from 'react';

import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';

import './styles/index.scss';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', { hovered: true, selected: false }, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-wrapper">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
