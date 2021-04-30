import { useState } from 'react';
import { CreateTaskForm } from '../../components';

const CreatTasks = () => {

  const [task, setTask] = useState('');

  const [priority, setPriority] = useState('baixa');

  const [completed, setCompleted] = useState(false);

  const handleTask = (event) => {
    // { value } = event.target;

  //   setTask({ ...task, value })
  }

  const handlePriority = (event) => {
    // { value } = event.target;

  //   setPriority({ ...priority, value });
  };
  
  const handleCompleted = (event) => {
    // { value } = event.target;

    // setCompleted({ ...completed, value });
  };

  const handleSubmit = (event) => {
    event.preventDefalult();
  };

  return (
    <CreateTaskForm 
    dataPriority={priority} 
    dataCompleted={completed} 
    onChange={handleTask} 
    onChangeCompleted={handleCompleted} 
    onChangePriority={handlePriority} 
    onSubmit={handleSubmit}
    />
  );
};

export default CreatTasks;