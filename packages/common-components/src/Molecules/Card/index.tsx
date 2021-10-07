import React from 'react';
import { ICardProps } from './types';
import styled from 'styled-components';
import { Accent, Shadows } from '../../Theme/Colours';

const StyledCard = styled.div`
  background-color: ${Accent.text};
  box-sizing: border-box;
  box-shadow: 1px 1px 10px ${Shadows.main};
  padding: 20px;
  border-radius: 25px;
`;

export const Card = ({
  children,
  canBeDeleted,
  onDelete = () => {},
}: ICardProps): JSX.Element => {
  return (
    <StyledCard role="banner">
      {canBeDeleted && (
        <div role="heading">
          <span onClick={onDelete}>X</span>
        </div>
      )}
      {children}
    </StyledCard>
  );
};
