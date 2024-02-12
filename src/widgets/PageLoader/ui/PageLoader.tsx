import { classNames } from "shared/lib/classNames/classNames";

import Loader from "shared/ui/Loader/Loader";
import styles from "./PageLoader.module.scss";

import type { FC } from "react";

interface PageLoaderProps {
  className?: string;
}

  const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props;
    return (
      <div className={classNames(styles.page, {}, [className])}>
        <Loader />
      </div>
    );
  };

export default PageLoader;