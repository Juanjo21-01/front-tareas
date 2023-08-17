/* eslint-disable react/prop-types */
import { useContext } from 'react';
import TaskCard from './TaskCard';
import TaskContext from '../context/TaskContext';

const TaskList = () => {
  // Hook useContext
  const { tasks } = useContext(TaskContext);

  // Si no hay tareas, mostramos un mensaje
  if (tasks.length === 0) return <h2>No hay tareas</h2>;

  return (
    <>
      <h1> Lista de Tareas</h1>

      {/* Recorrer tareas */}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;
