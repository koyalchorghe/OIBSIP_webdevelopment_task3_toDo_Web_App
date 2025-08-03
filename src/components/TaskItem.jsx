import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit, faSave, faTrash, faCode } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task, updateTask, deleteTask, permanentlyDeleteTask, setActiveTab, activeTab, className }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(task.name);
  const [editDescription, setEditDescription] = useState(task.description);
  const [editAssignee, setEditAssignee] = useState(task.assignee || 'Alice'); // Default to 'Alice'
  const [editAssignTo, setEditAssignTo] = useState(task.assignTo || '');
  const [editPriority, setEditPriority] = useState(task.priority || 'medium');
  const [editCategory, setEditCategory] = useState(task.category || 'general');
  const [deadlineDate, setDeadlineDate] = useState(task.deadline ? new Date(task.deadline) : new Date()); // Default to task.deadline or today's date
  const [assignees] = useState(['Alice', 'Bob', 'Charlie']);

  const handleComplete = () => {
    updateTask({ ...task, completed: true, completedAt: new Date().toISOString() });
  };

  const handleSave = () => {
    updateTask({
      ...task,
      name: editName,
      description: editDescription,
      assignee: editAssignee,
      assignTo: editAssignTo,
      deadline: deadlineDate,
      priority: editPriority,
      category: editCategory,
    });
    setIsEditing(false);
  };

  const handleViewDevelopment = () => {
    updateTask({
      ...task,
      category: 'development',
      completed: false,
      completedAt: null,
    });
  };

  const handleDelete = () => {
    if (activeTab === 'deleted') {
      if (window.confirm('Are you sure you want to permanently delete this task?')) {
        permanentlyDeleteTask(task.id);
      }
    } else {
      deleteTask(task.id);
    }
  };

  return (
    <tr className={`border-b ${className}`}>
      <td className="w-1/6 px-6 py-3">
        {isEditing ? (
          <input
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-300"
          />
        ) : (
          <span className="text-gray-800">{task.name}</span>
        )}
      </td>
      <td className="w-2/6 px-6 py-3">
        <textarea
          value={isEditing ? editDescription : task.description}
          onChange={(e) => setEditDescription(e.target.value)}
          readOnly={!isEditing}
          className={`p-2 border rounded-lg w-full max-w-full h-20 focus:ring-2 focus:ring-blue-300 resize-none whitespace-normal break-words ${
            !isEditing ? 'bg-gray-50 text-gray-600 cursor-default' : 'bg-white'
          }`}
          rows="3"
        />
      </td>
      <td className="w-1/6 px-6 py-3">
        {isEditing ? (
          <input
            type="date"
            value={deadlineDate ? deadlineDate.toISOString().split('T')[0] : ''}
            onChange={(e) => setDeadlineDate(e.target.value ? new Date(e.target.value) : new Date())}
            className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-300"
          />
        ) : (
          <span className="text-gray-600">
            {task.deadline ? new Date(task.deadline).toLocaleDateString() : new Date().toLocaleDateString()}
          </span>
        )}
      </td>
      <td className="w-1/6 px-6 py-3">
        {isEditing ? (
          <select
            value={editAssignee}
            onChange={(e) => setEditAssignee(e.target.value)}
            className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-300"
          >
            {assignees.map((person) => (
              <option key={person} value={person}>
                {person}
              </option>
            ))}
          </select>
        ) : (
          <span className="text-gray-600">{task.assignee || 'Alice'}</span>
        )}
      </td>
      <td className="w-1/6 px-6 py-3">
        {isEditing ? (
          <input
            type="text"
            value={editAssignTo}
            onChange={(e) => setEditAssignTo(e.target.value)}
            className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-300"
            placeholder="Enter assign to"
          />
        ) : (
          <span className="text-gray-600">{task.assignTo || 'Unassigned'}</span>
        )}
      </td>
      <td className="w-1/6 px-6 py-3 text-sm text-gray-600">
        {new Date(task.createdAt).toLocaleDateString()}
      </td>
      <td className="w-1/12 px-6 py-3">
        {isEditing ? (
          <select
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
            className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-300"
          >
            <option value="general">General</option>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="testing">Testing</option>
            <option value="review">Review</option>
          </select>
        ) : (
          <span className="text-gray-600">{task.category.charAt(0).toUpperCase() + task.category.slice(1)}</span>
        )}
      </td>
      <td className="w-1/12 px-6 py-3">
        {isEditing ? (
          <select
            value={editPriority}
            onChange={(e) => setEditPriority(e.target.value)}
            className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-300"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        ) : (
          <span
            className={`px-2 py-1 rounded-full text-sm ${
              task.priority === 'high' ? 'bg-red-100 text-red-800' :
              task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}
          >
            {task.priority ? task.priority.charAt(0).toUpperCase() + task.priority.slice(1) : 'Medium'}
          </span>
        )}
      </td>
      <td className="w-1/12 px-6 py-3">
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            task.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {task.completed ? 'Completed' : 'Pending'}
        </span>
      </td>
      <td className="w-1/12 px-6 py-3">
        <div className="flex gap-3">
          {!task.completed && (
            <button
              onClick={handleComplete}
              className="text-green-600 hover:text-green-800 transition-colors"
              title="Mark as Complete"
            >
              <FontAwesomeIcon icon={faCheckCircle} size="lg" />
            </button>
          )}
          {isEditing ? (
            <button
              onClick={handleSave}
              className="text-blue-600 hover:text-blue-800 transition-colors"
              title="Save Changes"
            >
              <FontAwesomeIcon icon={faSave} size="lg" />
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="text-yellow-600 hover:text-yellow-800 transition-colors"
              title="Edit Task"
            >
              <FontAwesomeIcon icon={faEdit} size="lg" />
            </button>
          )}
          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-800 transition-colors"
            title={activeTab === 'deleted' ? 'Permanently Delete Task' : 'Delete Task'}
          >
            <FontAwesomeIcon icon={faTrash} size="lg" />
          </button>
          {activeTab !== 'development' && (
            <button
              onClick={handleViewDevelopment}
              className="text-purple-600 hover:text-purple-800 transition-colors"
              title="Mark as Development Task"
            >
              <FontAwesomeIcon icon={faCode} size="lg" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default TaskItem;