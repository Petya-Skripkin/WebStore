import React from 'react';
import { Redirect, withRouter } from 'react-router';

import { Button } from 'components/.'
import authHelpers from 'helpers/auth';
import { urls } from '../../constants';
import { login } from './api';

import { Content, Title, Input } from './styles';

const Login = ({ history }) => {
  const [load, setLoad] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    async function auth() {
      const res = await authHelpers.checkauth();
      if(!res) {
        authHelpers.signout();
      }

      setIsAuthenticated(res);
      setLoad(false);
    }

    auth();
  }, [])

  if (load) {
    return <span>Loading...</span>;
  }

  if (isAuthenticated) {
    return <Redirect to={{ pathname: urls.HOME }} />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await login(email, password);
    // tslint:disable-next-line: no-debugger

    if (data) {
      authHelpers.authenticate(data.access, data.refresh);
      history.push(urls.HOME);
    }
  }

  return (
    <Content onSubmit={handleSubmit}>
      <Title>Войти</Title>
      <Input type="email" name="login" placeholder="Логин" onChange={e => setEmail(e.target.value)} required />
      <Input type="password" name="password" placeholder="Пароль" onChange={e => setPassword(e.target.value)} required />
      <br/>
      <br/>
      <Button>Войти</Button>
    </Content>
  );
};

export default withRouter(Login);