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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
        <h2 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h2>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          autoFocus
          className="bg-slate-300  p-3 w-full mb-2"
          name="title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          placeholder="Escribe la descripción"
          className="bg-slate-300  p-3 w-full mb-2"
          name="description"
          value={form.description}
          onChange={handleChange}
        ></textarea>

        <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
