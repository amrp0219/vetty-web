import React from 'react';

export interface IButtonProps {
  id?: string;
  children: React.ReactElement | React.ReactNode;
  onClick: () => void;
}
