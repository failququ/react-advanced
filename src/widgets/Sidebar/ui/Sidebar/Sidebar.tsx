import { useState, FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { LangSwitch } from 'widgets/LangSwitch';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import Button from 'shared/ui/Button/Button';
import UILink from 'shared/ui/UILink/UILink';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(styles.sidebar, { [styles.collapsed]: isCollapsed }, [className])} data-testid="sidebar">
      <Button
        data-testid="sidebar-toggle"
        className={styles.collapseBtn}
        theme="filledInverted"
        size="medium"
        onClick={handleCollapse}
        square
      >
        {isCollapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <UILink
          className={styles.item}
          theme="secondary"
          to={RoutePath.main}
        >
          <MainIcon className={styles.icon} />
          <span className={styles.link}>{t('links.main')}</span>
        </UILink>

        <UILink
          className={styles.item}
          theme="secondary"
          to={RoutePath.about}
        >
          <AboutIcon className={styles.icon} />
          <span className={styles.link}>{t('links.about')}</span>
        </UILink>
      </div>
      <div className={classNames(
        styles.switchers,
        { [styles.collapsedSwitchers]: isCollapsed },
        [],
      )}
      >
        <ThemeSwitch />
        <LangSwitch short={isCollapsed} />
      </div>
    </div>
  );
};

export default Sidebar;
