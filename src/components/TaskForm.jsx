import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [assignees, setAssignees] = useState(['Alice', 'Bob', 'Charlie']);
  const [assignTo, setAssignTo] = useState('');
  const [deadlineDate, setDeadlineDate] = useState(new Date()); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName.trim(), taskDescription.trim(), assignee, assignTo.trim(), deadlineDate);
      setTaskName('');
      setTaskDescription('');
      setAssignee('');
      setAssignees(['Alice', 'Bob', 'Charlie']);
      setAssignTo('');
      setDeadlineDate(new Date());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-4">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task"
        className="p-2 border rounded"
      />
      <textarea
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Add a description (optional)"
        className="p-2 border rounded"
        rows="3"
      />
      {/* <input
        type="date"
        value={deadlineDate.toISOString().split('T')[0]}
        onChange={(e) => setDeadlineDate(new Date(e.target.value))}
        className="p-2 border rounded"
        min={new Date().toISOString().split('T')[0]}
      />
      <label className="text-sm font-bold">
        Deadline: {deadlineDate.toLocaleDateString()}
      </label> */}
      <label className="text-sm font-bold">Assignee:</label>
      <select
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">Select Assignee</option>
        {assignees.map((person) => (
          <option key={person} value={person}>
            {person}
          </option>
        ))}
      </select>
      <label className="text-sm font-bold">Assign To:</label>
      <input
        type="text"
        value={assignTo}
        onChange={(e) => setAssignTo(e.target.value)}
        placeholder="Assign to..."
        className="p-2 border rounded"
      />
      <label className="text-sm font-bold">Deadline:</label>
      <input
        type="date"
        value={deadlineDate.toISOString().split('T')[0]}
        onChange={(e) => setDeadlineDate(new Date(e.target.value))}
        className="p-2 border rounded"
        min={new Date().toISOString().split('T')[0]}
      />
      <label className="text-sm font-bold">
        Deadline: {deadlineDate.toLocaleDateString()}
      </label>

      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 self-start text-sm"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;