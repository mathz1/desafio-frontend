import { CenteredContainer, LinksContainer, Form, Header } from '../../styles/publicRoutes';
import { Input, Buttom, Link } from '../../components/General';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Register = () => {
  return (
    <CenteredContainer>
      <Header>
        <Logo />
        <h2>Crie sua conta e organize suas tarefas!</h2>
      </Header>
      <Form>
        <Input 
          inputName="name"
          label="Nome"
          type="text"
          placeholder="Digite seu nome"
          // onChange={handleEmail}
        />
        <Input 
          inputName="login"
          label="Login"
          type="email"
          placeholder="Digite seu e-mail"
          // onChange={handleEmail}
        />
        <Input
          inputName="password" 
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          // onChange={handleEmail}
        />
      <Buttom text="Registrar" typeButton="submit" />
      <LinksContainer>
        <Link path="/login" text="Já tenho uma conta" />
      </LinksContainer>
      </Form>
    </CenteredContainer>
  );
};

export default Register;