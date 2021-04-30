import { CenteredContainer, LinksContainer, Form, Header, DivContainer } from '../../styles/publicRoutes';
import { Input, Buttom, Link } from '../../components/General';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';



const Register = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleName = (event) => {
    const { value } = event.target;

    setName(value);
  }
  const handleEmail = (event) => {
    const { value } = event.target;

    setEmail(value);
  }
  const handlePassword = (event) => {
    const { value } = event.target;

    setPassword(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('register', { name, email, password });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userName', response.data.user.name);

      history.push('/profile')
    }
    catch (err) {
      alert('Falha no registro, tente novamente');
    }
  }

  return (
    <DivContainer>
      <CenteredContainer>
        <Header>
          <Logo />
          <h2>Crie sua conta e organize suas tarefas!</h2>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Input 
            inputName="name"
            label="Nome"
            type="text"
            placeholder="Digite seu nome"
            onChange={handleName}
          />
          <Input 
            inputName="login"
            label="Login"
            type="email"
            placeholder="Digite seu e-mail"
            onChange={handleEmail}
          />
          <Input
            inputName="password" 
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            onChange={handlePassword}
          />
        <Buttom text="Registrar" typeButton="submit" />
        <LinksContainer>
          <Link path="/login" text="Já tenho uma conta" />
        </LinksContainer>
        </Form>
      </CenteredContainer>
  </DivContainer>
  );
};
export default Register;