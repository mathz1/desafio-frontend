import { CreateTaskContainer } from './styles';
import { Form } from '../../styles/publicRoutes';
import { Buttom, Input, Select } from '../General';

const CreateTask = () => {
  return (
    <CreateTaskContainer>
      {/*TODO botão de fechar a janela */}
      <Form>
        <Input 
          label="Tarefa"
          type="text"
          placeholder="Digite o nome da tarefa"
          // onChange={handleEmail}
        />
        <Select
          //value= data
          name="priority"
          label="Prioridade da tarefa"
          //onChange={onChange}
          optionList={[{ name: 'Baixo', value: 'BAIXO' }, { name: 'Alto', value: 'ALTO' }]}
        />
        <Select
          //value= data
          name="completed"
          label="Finalizada"
          //onChange={onChange}
          optionList={[{ name: 'Não', value: false }, { name: 'Sim', value: true }]}
        />
        <Buttom text="Criar Tarefa" type="submit" />
      </Form>
    </CreateTaskContainer>
  );
};

export default CreateTask;
