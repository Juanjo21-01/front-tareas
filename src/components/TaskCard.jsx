/* eslint-disable react/prop-types */

import { useContext } from 'react';
import TaskContext from '../context/TaskContext';

const TaskCard = ({ task }) => {
  // Hook useContext
  const { deleteTask } = useContext(TaskContext);

  return (
    <article className="bg-gray-800 text-white p-4 rounded-3xl">
      <h2 className="text-xl font-bold capitalize">{task.title}</h2>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </article>
  );
};

export default TaskCard;
