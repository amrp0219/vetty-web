import React from 'react';
import { IButtonProps } from './types';
import styled from 'styled-components';
import { Accent, Primary } from '../../Theme/Colours';

const StyledButton = styled.button`
  width: 100%;
  background: ${Accent.text};
  padding: 15px 20px;
  border-radius: 25px;
  border: 1px solid ${Primary.text};
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: ${Accent.main};
    color: ${Accent.text};
    border-color: transparent;
  }
`;

export const Button = ({
  id,
  children,
  onClick = () => {},
}: IButtonProps): JSX.Element => {
  return (
    <StyledButton id={id} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
