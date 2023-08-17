/* eslint-disable react/prop-types */

import { useContext } from 'react';
import TaskContext from '../context/TaskContext';

const TaskCard = ({ task }) => {
  // Hook useContext
  const { deleteTask } = useContext(TaskContext);

  return (
    <article>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </article>
  );
};

export default TaskCard;
