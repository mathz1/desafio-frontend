import { CenteredContainer, LinksContainer, Form, Header } from '../../styles/publicRoutes';
import { Input, Buttom, Link } from '../../components/General';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg'

import React, { useState } from 'react';

import api from '../../services/api';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('login', { email, password });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userName', response.data.user.name);

      history.push('/profile')
    }
    catch (err) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <CenteredContainer>
      <Header>
        <Logo />
        <h2>Acesse sua conta e organize suas tarefas!</h2>
      </Header>
      <Form onSubmit={handleLogin} >
        <Input 
          label="Login"
          type="email"
          placeholder="Digite seu e-mail"
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          onChange={e => setPassword(e.target.value)}
        />
      <Buttom text="Acessar" typeButton="submit" />
      <LinksContainer>
        <Link path="/register" text="Fazer cadastro" />
      </LinksContainer>
      </Form>
    </CenteredContainer>
    
    // <form>
    //   <input label='Login' />
    //   <input label='Password' />
    //   <button type='button' />
    // </form>
  );
};

export default Login;