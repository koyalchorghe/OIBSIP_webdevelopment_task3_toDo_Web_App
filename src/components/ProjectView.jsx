import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const ProjectView = ({ project, updateTasks, activeTab, setActiveTab }) => {
  const [deletedTasks, setDeletedTasks] = useState([]);

  const addTask = (taskName, taskDescription, assignee, assignTo, deadlineDate, category, priority) => {
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
      category: category || 'general',
      priority: priority || 'medium', // Default to medium priority
    };
    updateTasks([...project.tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    // If the task is in deletedTasks and is being marked as development, move it back to project.tasks
    if (deletedTasks.some((t) => t.id === updatedTask.id)) {
      setDeletedTasks(deletedTasks.filter((t) => t.id !== updatedTask.id));
      updateTasks([...project.tasks, updatedTask]);
    } else {
      updateTasks(project.tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
    }
  };

  const deleteTask = (taskId) => {
    const taskToDelete = project.tasks.find((t) => t.id === taskId);
    if (taskToDelete) {
      setDeletedTasks([...deletedTasks, taskToDelete]);
      updateTasks(project.tasks.filter((t) => t.id !== taskId));
    }
  };

  const permanentlyDeleteTask = (taskId) => {
    // Remove the task from deletedTasks
    setDeletedTasks(deletedTasks.filter((t) => t.id !== taskId));
  };

  // Filters: Exclude category-specific tasks from pending, include all completed tasks
  const pendingTasks = project.tasks.filter((t) => !t.completed && t.category === 'general');
  const completedTasks = project.tasks.filter((t) => t.completed);
  const developmentTasks = project.tasks.filter((t) => t.category === 'development' && !t.completed);
  const designTasks = project.tasks.filter((t) => t.category === 'design' && !t.completed);
  const testingTasks = project.tasks.filter((t) => t.category === 'testing' && !t.completed);
  const reviewTasks = project.tasks.filter((t) => t.category === 'review' && !t.completed);

  const getTabClass = (tab) => {
    const colors = {
      pending: 'bg-blue-600 text-white',
      completed: 'bg-green-600 text-white',
      deleted: 'bg-red-600 text-white',
      development: 'bg-purple-600 text-white',
      design: 'bg-indigo-600 text-white',
      testing: 'bg-orange-600 text-white',
      review: 'bg-teal-600 text-white',
    };
    return `px-4 py-2 rounded font-semibold transition-colors ${
      activeTab === tab ? colors[tab] : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }`;
  };

  return (
    <div className="p-4">
      <TaskForm addTask={addTask} />
      <div className="flex gap-4 mt-4 mb-4 flex-wrap">
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
        <button className={getTabClass('design')} onClick={() => setActiveTab('design')}>
          Design Tasks
        </button>
        <button className={getTabClass('testing')} onClick={() => setActiveTab('testing')}>
          Testing Tasks
        </button>
        <button className={getTabClass('review')} onClick={() => setActiveTab('review')}>
          Review Tasks
        </button>
      </div>
      <TaskList
        tasks={
          activeTab === 'pending' ? pendingTasks :
          activeTab === 'completed' ? completedTasks :
          activeTab === 'deleted' ? deletedTasks :
          activeTab === 'development' ? developmentTasks :
          activeTab === 'design' ? designTasks :
          activeTab === 'testing' ? testingTasks :
          reviewTasks
        }
        updateTask={updateTask}
        deleteTask={deleteTask}
        permanentlyDeleteTask={permanentlyDeleteTask}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </div>
  );
};

export default ProjectView;