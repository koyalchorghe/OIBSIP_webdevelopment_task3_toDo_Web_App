import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const ProjectView = ({ project, updateTasks }) => {
  const [activeTab, setActiveTab] = useState('pending');
  const [deletedTasks, setDeletedTasks] = useState([]);

  const addTask = (taskName, taskDescription, assignee, assignTo, deadlineDate, category) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      completed: false,
      createdAt: new Date(),
      completedAt: null,
      assignee: assignee,
      assignTo: assignTo,
      deadline: deadlineDate ? deadlineDate.toISOString() : null,
      category: category || 'general', // Default to 'general' if no category is specified
    };
    updateTasks([...project.tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    updateTasks(project.tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const deleteTask = (taskId) => {
    const taskToDelete = project.tasks.find((t) => t.id === taskId);
    if (taskToDelete) {
      setDeletedTasks([...deletedTasks, taskToDelete]);
    }
    updateTasks(project.tasks.filter((t) => t.id !== taskId));
  };

  const pendingTasks = project.tasks.filter((t) => !t.completed);
  const completedTasks = project.tasks.filter((t) => t.completed);
  const developmentTasks = project.tasks.filter((t) => t.category === 'development');

  const getTabClass = (tab) =>
    `px-4 py-2 rounded font-semibold transition-colors ${
      activeTab === tab
        ? tab === 'pending'
          ? 'bg-blue-600 text-white'
          : tab === 'completed'
          ? 'bg-green-600 text-white'
          : tab === 'deleted'
          ? 'bg-red-600 text-white'
          : 'bg-purple-600 text-white' // Development Tasks tab
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`;

  return (
    <div className="p-4">
      <TaskForm addTask={addTask} />
      <div className="flex gap-4 mt-4 mb-4">
        <button className={getTabClass('pending')} onClick={() => setActiveTab('pending')}>
          Scheduled Tasks
        </button>
        <button className={getTabClass('completed')} onClick={() => setActiveTab('completed')}>
          Completed Tasks
        </button>
        <button className={getTabClass('deleted')} onClick={() => setActiveTab('deleted')}>
          Deleted Tasks
        </button>
        <button className={getTabClass('development')} onClick={() => setActiveTab('development')}>
          Development Tasks
        </button>
      </div>
      <TaskList
        tasks={
          activeTab === 'pending'
            ? pendingTasks
            : activeTab === 'completed'
            ? completedTasks
            : activeTab === 'deleted'
            ? deletedTasks
            : developmentTasks
        }
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default ProjectView;