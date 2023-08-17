import { TaskProvider } from '../context/TaskContext';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Tasks = () => {
  return (
    <>
      <TaskProvider>
        {/* Formulario */}
        <TaskForm />

        {/* Lista de tareas */}
        <TaskList   />
      </TaskProvider>
    </>
  );
};

export default Tasks;
