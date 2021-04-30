import { Form, DivContainer, CenteredContainer } from '../../styles/publicRoutes';
import { Buttom, Input, Select, Link } from '../General';

const CreateTask = ({
  dataPriority,
  dataCompleted, 
  onChange, 
  onChangePriority,
  onChangeCompleted, 
  onSubmit,
}) => {
  return (
    <DivContainer>
      <CenteredContainer>
          <Link path="/profile" text="Close"/>
        <Form onSubmit={onSubmit}>
          <Input 
            label="Tarefa"
            type="text"
            placeholder="Digite o nome da tarefa"
            onChange={onChange}
          />
          <Select
            value={dataPriority}
            name="priority"
            label="Prioridade da tarefa"
            onChange={onChangePriority}
            optionList={[{ name: 'Baixo', value: 'BAIXO' }, { name: 'Alto', value: 'ALTO' }]}
          />
          <Select
            value={dataCompleted}
            name="completed"
            label="Finalizada"
            onChange={onChangeCompleted}
            optionList={[{ name: 'Não', value: false }, { name: 'Sim', value: true }]}
          />
          <Buttom text="Criar Tarefa" type="submit" />
        </Form>
      </CenteredContainer>
    </DivContainer>
  );
};

export default CreateTask;
