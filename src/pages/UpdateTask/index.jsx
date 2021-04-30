import { useState } from 'react';
import { UpdateTaskForm } from '../../components';
import api from '../../services/api';


const UpdateTasks = () => {

  const taskId = localStorage.getItem('taskId');

  const token = localStorage.getItem('token');

  const [name, setName] = useState('');

  const [priority, setPriority] = useState('baixa');

  const [completed, setCompleted] = useState('não');

  const handleName = (event) => {
    const { value } = event.target;

    setName(value)
  }

  const handlePriority = (event) => {
    const { value } = event.target;

    const prioridade = value.toUpperCase().trim();

    setPriority(prioridade);
  };
  
  const handleCompleted = (event) => {
    const { value } = event.target;

    const completo = value.toLowerCase().trim();

    if (completo === 'sim') {
      const valorCompleto = true;
      setCompleted(valorCompleto)
    } else if (completo === 'nao' || completo === 'não'){
      const valorCompleto = false;
      setCompleted(valorCompleto)
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await api.put(`tasks/${taskId}`, {
         name, priority, completed }, { headers: {
          Authorization: `Bearer ${token}`,
        } } )
    }
    catch (err) {
      alert('Falha no cadastro de tarefa, tente novamente', err);
    };

  };

  return (
    <UpdateTaskForm
    onChangeName={handleName} 
    onChangeCompleted={handleCompleted} 
    onChangePriority={handlePriority} 
    onSubmit={handleSubmit}
    />
  );
};

export default UpdateTasks;