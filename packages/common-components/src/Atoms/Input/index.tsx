import React from 'react';
import styled from 'styled-components';
import { Accent, Primary } from '../../Theme/Colours';
import { IInputProps } from './types';

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  border: 1px solid ${Primary.text};
  outline: none;
  &:focus {
    border-color: ${Accent.main};
  }
`;

export const Input = ({
  type = 'text',
  role = 'texbox',
  ...rest
}: IInputProps): JSX.Element => {
  return <StyledInput role={role} type={type} {...rest} />;
};
