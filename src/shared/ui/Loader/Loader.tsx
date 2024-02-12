import { classNames } from "shared/lib/classNames/classNames";

import "./Loader.scss";

import type { FC } from "react";

interface LoaderProps {
  className?: string;
}

  const Loader: FC<LoaderProps> = (props) => {
  const { className } = props;
    return (
      <div className={classNames('lds-roller', {}, [className])}>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    );
  };

export default Loader;