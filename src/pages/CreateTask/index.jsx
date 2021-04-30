import { useState } from 'react';
import { CreateTaskForm } from '../../components';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';


const CreatTasks = () => {

  const token = localStorage.getItem('token');

  const [task, setTask] = useState('');

  const [priority, setPriority] = useState('baixa');

  const [completed, setCompleted] = useState('não');

  const handleTask = (event) => {
    const { value } = event.target;

    setTask({ ...task, value })
  }

  const handlePriority = (event) => {
    const { value } = event.target;

    const prioridade = value.toUpperCase();

    setPriority({ ...priority, prioridade });
  };
  
  const handleCompleted = (event) => {
    const { value } = event.target;

    const completo = value.toLowerCase();

    if (completo === 'sim') {
      const valorCompleto = true;
      setCompleted({ ...completed, valorCompleto })
    } else if (completo === 'nao' || completo === 'não'){
      const valorCompleto = false;
      setCompleted({ ...completed, valorCompleto })
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefalult();

    try {
      await api.post('tasks', {
        headers: {
            Authorization: `Bearer ${token}`,
        }, task, priority, completed });
    }
    catch (err) {
      alert('Falha no cadastro de tarefa, tente novamente');
    };

    <Redirect to='/profile' />;
  };

  return (
    <CreateTaskForm 
    // dataPriority={priority} 
    // dataCompleted={completed} 
    onChange={handleTask} 
    onChangeCompleted={handleCompleted} 
    onChangePriority={handlePriority} 
    onSubmit={handleSubmit}
    />
  );
};

export default CreatTasks;