import { classNames } from 'shared/lib/classNames/classNames';

import React, {
  memo, type FC, type InputHTMLAttributes,
} from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input: FC<InputProps> = (props) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    ...restProps
  } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <div className={classNames(styles.inputWrapper, {}, [className])}>
      {placeholder && <div className={styles.placeholder}>{`${placeholder}`}</div>}
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={handleOnChange}
        {...restProps}
      />
    </div>
  );
};

export default memo(Input);
