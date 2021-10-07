import React from 'react';
import './reset.css';

export interface IThemeWrapperProps {
  children: React.ReactElement | React.ReactNode;
}
export const ThemeWrapper = ({ children }: IThemeWrapperProps): JSX.Element => {
  return <>{children}</>;
};
