
import React from 'react';

import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';

import styles from './button.module.scss' 

export type ButtonProps = AntButtonProps;
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