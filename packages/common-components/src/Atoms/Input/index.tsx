import React from 'react';
import styled from 'styled-components';
import { Accent, Primary } from '../../Colours';

export interface IInputProps {
  id: string;
  name: string;
  placeholder: string;
  type?: string;
  role?: string;
}

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
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
