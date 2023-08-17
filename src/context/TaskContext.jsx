/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { tasks as data } from '../data/tasks';
// CREAR CONTEXTO
const TaskContext = createContext();

// Proveedor de datos
const TaskProvider = ({ children }) => {
  // Variables de estado
  const [tasks, setTasks] = useState([]);

  //  Cargamos las tareas
  useEffect(() => {
    setTasks(data);
  }, []);

  // Crear Tareas
  const createTask = (task) => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  //   Eliminar Tareas
  const deleteTask = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id: '${id}' ?`
    );

    if (!isDelete) return;

    // Eliminar el dato seleccionado
    let newTask = tasks.filter((el) => el.id !== id);
    setTasks(newTask);
  };

  // Datos
  const dataTask = {
    tasks,
    createTask,
    deleteTask,
  };

  // Retornar el contexto
  return (
    <TaskContext.Provider value={dataTask}>{children}</TaskContext.Provider>
  );
};

export { TaskProvider };
export default TaskContext;
