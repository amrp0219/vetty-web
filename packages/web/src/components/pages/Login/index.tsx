import React from 'react';
import { Button, Input } from 'common-components';

export const Login = (): JSX.Element => {
  return (
    <div>
      Login a
      <Button />
      <Input type="email" id="email" name="email" />
    </div>
  );
};
