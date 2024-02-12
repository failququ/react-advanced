import { useState, FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitch } from 'widgets/LangSwitch';
import { ThemeSwitch } from 'widgets/ThemeSwitch';
import Button from 'shared/ui/Button/Button';
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
      <Button data-testid="sidebar-toggle" onClick={handleCollapse}>{t('sidebar.toggle')}</Button>
      <div className={classNames(
        styles.switchers,
        { [styles.collapsedSwitchers]: isCollapsed },
        [],
      )}
      >
        <ThemeSwitch />
        <LangSwitch />
      </div>
    </div>
  );
};

export default Sidebar;
