import React from 'react';

export interface ICardProps {
  children: React.ReactElement | React.ReactNode;
  canBeDeleted?: boolean;
  onDelete?: () => void;
}
