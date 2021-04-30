import { Form, DivContainer, CenteredContainer } from '../../styles/publicRoutes';
import { Buttom, Input, Select, Link } from '../General';


const UpdateTaskForm = ({
  onChangeId,
  onChangeName, 
  onChangePriority,
  onChangeCompleted, 
  onSubmit,
}) => {

  return (
    <DivContainer>
      <CenteredContainer>
          <Link path="/profile" text="Close"/>
        <Form>
          <Input 
            label="id da Tarefa"
            type="text"
            placeholder="Digite o nome da tarefa"
            onChange={onChangeId}
          />
          <Input 
            label="Nome da Tarefa"
            type="text"
            placeholder="Digite o nome da tarefa"
            onChange={onChangeName}
          />
          <Input 
            label="Prioridade"
            type="text"
            placeholder="Alta | Baixa"
            onChange={onChangePriority}
          />
          <Input 
            label="Completa:"
            type="text"
            placeholder="Sim | Não"
            onChange={onChangeCompleted}
          />
          <Buttom text="Atualizar Tarefa" type="button" onClick={onSubmit} />
        </Form>
      </CenteredContainer>
    </DivContainer>
  );
};

export default UpdateTaskForm;
