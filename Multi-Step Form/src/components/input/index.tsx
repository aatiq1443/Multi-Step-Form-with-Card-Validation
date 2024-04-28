import clsx from 'clsx';
import * as React from 'react';

import styles from './input-style';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  endEnhancer?: React.ReactElement | string;
  error: string;
  startEnhancer?: React.ReactElement | string;
  testId?: string;
  textAlign?: 'left' | 'center' | 'right';
  type?: string;
}

const Input: React.FC<InputProps> = ({
  endEnhancer,
  error,
  startEnhancer,
  testId,
  textAlign = 'left',
  type,
  ...props
}) => (
  <div
    className={clsx([
      styles.inputContainer,
      error ? styles.border.errorState : styles.border.normalState,
    ])}
  >
     <div className={`gap2 flex items-center`}>
      {startEnhancer && <span className="flex h-full min-w-6 items-center justify-center">
        {startEnhancer}
      </span>}
      <input
        {...props}
        autoComplete='off'
        className={clsx([
          styles.input,
          textAlign ? styles.textAlign[textAlign] : '',
        ])}
        data-testid={testId}
        type={type || 'text'}
      />
      {endEnhancer && <span className="flex h-full min-w-6 items-center justify-center">
        {endEnhancer}
      </span>}
    </div>
  </div>
);

export default Input;
