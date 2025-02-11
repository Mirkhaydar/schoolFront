
import React from 'react';

import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';

import styles from './button.module.scss' 

export type ButtonProps = {
  autoInsertSpace?: boolean;
  block?: boolean;
  danger?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  iconPosition?: 'start' | 'end'; 
  loading?: boolean 
  shape?: 'default' | 'circle' | 'round';
  size?: 'large' | 'middle' | 'small';
  target?: string;
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
}& AntButtonProps
;
/**
 * @package
 */
export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <>
    <AntButton className={styles.button} {...props}>{children}</AntButton>
    </>
  );
};