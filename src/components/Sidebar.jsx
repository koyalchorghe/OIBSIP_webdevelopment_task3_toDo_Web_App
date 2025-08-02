import React, { useState } from 'react';

const Sidebar = ({ projects, selectedProjectId, setSelectedProjectId, addProject }) => {
  const [newProjectName, setNewProjectName] = useState('');

  const handleAddProject = () => {
    if (newProjectName.trim()) {
      addProject(newProjectName.trim());
      setNewProjectName('');
    }
  };

  return (
    <div className="w-64 bg-white border-r shadow-sm p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Projects</h2>
      <ul className="flex-1 overflow-y-auto">
        {projects.map(project => (
          <li
            key={project.id}
            className={`cursor-pointer p-2 rounded-md mb-1 ${selectedProjectId === project.id ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100'}`}
            onClick={() => setSelectedProjectId(project.id)}
          >
            {project.name}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          className="w-full p-2 border rounded mb-2"
          placeholder="New project"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          onClick={handleAddProject}
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
