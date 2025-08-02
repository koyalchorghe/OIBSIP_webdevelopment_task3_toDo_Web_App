import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faEdit, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task, updateTask, deleteTask, className }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(task.name);
  const [editDescription, setEditDescription] = useState(task.description);
  const [editAssignee, setEditAssignee] = useState(task.assignee || '');
  const [editAssignTo, setEditAssignTo] = useState(task.assignTo || '');
  const [deadlineDate, setDeadlineDate] = useState(new Date(task.deadline || Date.now()));
  const [assignees] = useState(['Alice', 'Bob', 'Charlie']);

  const handleComplete = () => {
    updateTask({ ...task, completed: true, completedAt: new Date().toISOString()});
  };

  const handleSave = () => {
    updateTask({
      ...task,
      name: editName,
      description: editDescription,
      assignee: editAssignee,
      assignTo: editAssignTo,
      deadline: deadlineDate,
    });
    setIsEditing(false);
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
            value={deadlineDate.toISOString().split('T')[0]}
            onChange={(e) => setDeadlineDate(new Date(e.target.value))}
            className="p-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-300"
          />
        ) : (
          <span className="text-gray-600">
            {task.deadline ? new Date(task.deadline).toLocaleDateString() : 'No deadline'}
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
            <option value="">Select Assignee</option>
            {assignees.map((person) => (
              <option key={person} value={person}>
                {person}
              </option>
            ))}
          </select>
        ) : (
          <span className="text-gray-600">{task.assignee || 'Unassigned'}</span>
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
            onClick={() => deleteTask(task.id)}
            className="text-red-600 hover:text-red-800 transition-colors"
            title="Delete Task"
          >
            <FontAwesomeIcon icon={faTrash} size="lg" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TaskItem;