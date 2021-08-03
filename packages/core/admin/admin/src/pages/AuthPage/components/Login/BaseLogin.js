/* eslint-disable no-unused-vars */
import React from 'react';
import { useIntl } from 'react-intl';
import { Box, Row, Stack, H1, Subtitle, Button, Checkbox, TextInput, Main, Tooltip } from '@strapi/parts';
import {HelpIcon} from '@strapi/icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../Logo';

const BaseLoginWrapper = styled(Box)`
  margin: 0 auto;
  width: 552px;
`;
const Column = styled(Row)`
  flex-direction: column;
`;
const AuthButton = styled(Button)`
  display: inline-block;
  width: 100%;
`;

const Login = ({ children, formErrors, modifiedData, onChange, onSubmit, requestError }) => {
  const { formatMessage } = useIntl();

  return (
    <Main labelledBy="Login page">
      <form onSubmit={onSubmit}>
        <Box paddingTop="11">
          <BaseLoginWrapper
            shadow="tableShadow"
            hasRadius
            padding="9"
            background="neutral0"
            justifyContent="center"
          >
            <Column>
              <Logo />
              <Box paddingTop="6" paddingBottom="1">
                <H1>Welcome back!</H1>
              </Box>
              <Box paddingBottom="7">
                <Subtitle textColor="neutral600">Log in to your Strapi account</Subtitle>
              </Box>
            </Column>
            <Stack size={6}>
              <TextInput
                error={formErrors.email}
                value={modifiedData.email}
                onChange={onChange}
                label="Email"
                name="email"
                required
              />
              <TextInput
                error={formErrors.password}
                onChange={onChange}
                value={modifiedData.password}
                label="Password"
                name="password"
                type="password"
                labelAction={
                  <Tooltip description="Content of the tooltip">
                    <button
                      aria-label="Information about the email"
                      style={{ border: 'none', padding: 0, background: 'transparent' }}
                    >
                      <HelpIcon aria-hidden={true} />
                    </button>
                  </Tooltip>
                }
                required
              />
              <Checkbox
                onValueChange={checked =>
                  onChange({ target: { value: checked, name: 'rememberMe' } })
                }
                value={modifiedData.rememberMe}
                name="rememberMe"
              >
                Remember me
              </Checkbox>
              <AuthButton type="submit">Login</AuthButton>
            </Stack>
          </BaseLoginWrapper>
        </Box>
      </form>
    </Main>
  );
};

Login.defaultProps = {
  children: null,
  onSubmit: e => e.preventDefault(),
  requestError: null,
};

Login.propTypes = {
  children: PropTypes.node,
  formErrors: PropTypes.object.isRequired,
  modifiedData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  requestError: PropTypes.object,
};

export default Login;

// import { get } from 'lodash';
// import { BaselineAlignment } from '@strapi/helper-plugin';

// import Button from '../../../../components/FullWidthButton';
// import AuthLink from '../AuthLink';
// import Box from '../Box';
// import Input from '../Input';
// import Section from '../Section';
/* <Section textAlign="center">
  <Logo />
</Section>
<Section withBackground>
  <BaselineAlignment top size="25px">
    <Box errorMessage={get(requestError, 'errorMessage', null)}>
      <form onSubmit={onSubmit}>
        <Input
          autoFocus
          error={formErrors.email}
          label="Auth.form.email.label"
          name="email"
          onChange={onChange}
          placeholder="Auth.form.email.placeholder"
          type="email"
          validations={{ required: true }}
          value={modifiedData.email}
        />
        <Input
          error={formErrors.password}
          label="Auth.form.password.label"
          name="password"
          onChange={onChange}
          type="password"
          validations={{ required: true }}
          value={modifiedData.password}
        />
        <Checkbox
          type="checkbox"
          message={formatMessage({ id: 'Auth.form.rememberMe.label' })}
          name="rememberMe"
          onChange={onChange}
          value={modifiedData.rememberMe}
        />
        <BaselineAlignment top size="27px">
          <Button type="submit" color="primary" textTransform="uppercase">
            {formatMessage({ id: 'Auth.form.button.login' })}
          </Button>
        </BaselineAlignment>
      </form>
      {children}
    </Box>
  </BaselineAlignment>
</Section>
<AuthLink label="Auth.link.forgot-password" to="/auth/forgot-password" /> */
