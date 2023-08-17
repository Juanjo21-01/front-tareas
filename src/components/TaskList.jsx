/* eslint-disable react/prop-types */
import { useContext } from 'react';
import TaskCard from './TaskCard';
import TaskContext from '../context/TaskContext';

const TaskList = () => {
  // Hook useContext
  const { tasks } = useContext(TaskContext);

  // Si no hay tareas, mostramos un mensaje
  if (tasks.length === 0)
    return (
      <h2 className="text-8xl text-red-900 text-center ">No hay tareas</h2>
    );

  return (
    <>
      <h1 className="text-5xl text-yellow-200 p-5"> Lista de Tareas</h1>

      <section className="grid grid-cols-4 gap-2">
        {/* Recorrer tareas */}
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>
    </>
  );
};

export default TaskList;
