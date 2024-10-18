"use client"
import React, { useState } from 'react';


interface Task {
  id: number;
  text: string;
  status: string;
}

const TodoApp: React.FC = () => {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj: Task = {
        id: Date.now(),
        text: newTask,
        status: 'In progress',
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const finishTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: 'Finished' } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <div className="w-full max-w-3xl bg-gray-700 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 ">Todo App</h1>

    
        <div className="flex justify-center mb-6 space-x-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a task here"
            className="border border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            Save Task
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
          >
            Get Tasks
          </button>
        </div>

        
        <table className="table-auto w-full text-left bg-gray-800">
          <thead>
            <tr className="bg-gray-900 text-gray-300">
              <th className="py-2 px-4">No.</th>
              <th className="py-2 px-4">Todo item</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <tr key={task.id} className="bg-gray-700 text-white">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{task.text}</td>
                  <td className="py-2 px-4">{task.status}</td>
                  <td className="py-2 px-4 flex space-x-2">
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      DELETE
                    </button>
                    <button
                      onClick={() => finishTask(task.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                    >
                      FINISHED
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4">
                  No tasks available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoApp;
