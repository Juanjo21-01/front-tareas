/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';

const initialForm = {
  title: '',
  description: '',
};

const TaskForm = () => {
  // Hook useContext
  const { createTask } = useContext(TaskContext);

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.description) {
      alert('Datos incompletos');
      return;
    }
    createTask(form);

    setForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        autoFocus
        name="title"
        value={form.title}
        onChange={handleChange}
      />

      <textarea
        placeholder="Escribe la descripción"
        name="description"
        value={form.description}
        onChange={handleChange}
      ></textarea>

      <button>Guardar</button>
    </form>
  );
};

export default TaskForm;
