import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [assignee, setAssignee] = useState('Alice'); // Default to 'Alice'
  const [assignTo, setAssignTo] = useState('');
  const [deadlineDate, setDeadlineDate] = useState(new Date()); // Default to today's date
  const [category, setCategory] = useState('general'); // Default to 'general'
  const [priority, setPriority] = useState('medium'); // Default to 'medium'
  const [assignees] = useState(['Alice', 'Bob', 'Charlie']);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTask(taskName, taskDescription, assignee, assignTo, deadlineDate, category, priority);
    setTaskName('');
    setTaskDescription('');
    setAssignee('Alice'); // Reset to default
    setAssignTo('');
    setDeadlineDate(new Date()); // Reset to today's date
    setCategory('general'); // Reset to default
    setPriority('medium'); // Reset to default
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Task Name</label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="mt-1 p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-300"
            placeholder="Enter task name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="mt-1 p-2 border rounded-lg w-full h-20 focus:ring-2 focus:ring-blue-300 resize-none"
            placeholder="Enter task description"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Due Date</label>
          <input
            type="date"
            value={deadlineDate ? deadlineDate.toISOString().split('T')[0] : ''}
            onChange={(e) => setDeadlineDate(e.target.value ? new Date(e.target.value) : new Date())}
            className="mt-1 p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Assignee</label>
          <select
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            className="mt-1 p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-300"
          >
            {assignees.map((person) => (
              <option key={person} value={person}>
                {person}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Assign To</label>
          <input
            type="text"
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="mt-1 p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-300"
            placeholder="Enter assign to"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-300"
          >
            <option value="general">General</option>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="testing">Testing</option>
            <option value="review">Review</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="mt-1 p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-300"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;