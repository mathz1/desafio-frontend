import { CenteredContainer, LinksContainer, Form, Header } from '../../styles/publicRoutes';
import { Input, Buttom, Link } from '../../components/General';
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Login = () => {
  return (
    <CenteredContainer>
      <Header>
        <Logo />
        <h2>Acesse sua conta e organize suas tarefas!</h2>
      </Header>
      <Form>
        <Input 
          label="Login"
          type="email"
          placeholder="Digite seu e-mail"
          // onChange={handleEmail}
        />
        <Input 
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          // onChange={handleEmail}
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