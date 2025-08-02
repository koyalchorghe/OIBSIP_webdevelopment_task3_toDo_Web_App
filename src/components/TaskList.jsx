import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  return (
    <div className="overflow-x-auto shadow-md rounded-lg bg-gray-100 p-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead className="bg-gradient-to-r from-gray-700 to-gray-900 text-white">
          <tr>
            <th className="w-1/6 px-6 py-3 text-left text-xs font-semibold tracking-wide uppercase">Task</th>
            <th className="w-2/6 px-6 py-3 text-left text-xs font-semibold tracking-wide uppercase">Description</th>
            <th className="w-1/6 px-6 py-3 text-left text-xs font-semibold tracking-wide uppercase">Due Date</th>
            <th className="w-1/6 px-6 py-3 text-left text-xs font-semibold tracking-wide uppercase">Assignee</th>
            <th className="w-1/6 px-6 py-3 text-left text-xs font-semibold tracking-wide uppercase">Assign To</th>
            <th className="w-1/6 px-6 py-3 text-left text-xs font-semibold tracking-wide uppercase">Created At</th>
            <th className="w-1/12 px-6 py-3 text-left text-xs font-semibold tracking-wide uppercase">Status</th>
            <th className="w-1/12 px-6 py-3 text-left text-xs font-semibold tracking-wide uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tasks.map((task, index) => (
            <TaskItem
              key={task.id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
              className={`transition-all duration-200 ${
                index % 2 === 0 ? 'bg-gray-50 hover:bg-gray-100' : 'bg-white hover:bg-gray-100'
              }`}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;