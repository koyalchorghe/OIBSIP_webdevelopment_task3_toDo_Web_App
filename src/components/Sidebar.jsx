import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Development icon

const Sidebar = ({ projects, selectedProjectId, setSelectedProjectId, addProject, setActiveTab }) => {
  const [newProjectName, setNewProjectName] = useState('');

  const handleAddProject = () => {
    if (newProjectName.trim()) {
      addProject(newProjectName.trim());
      setNewProjectName('');
    }
  };

  const handleDevelopmentClick = () => {
    // Ensure a project is selected; if not, select the first project
    if (!selectedProjectId && projects.length > 0) {
      setSelectedProjectId(projects[0].id);
    }
    setActiveTab('development'); // Set the active tab to development
  };

  return (
    <div className="w-64 bg-white border-r shadow-sm p-4 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Projects</h2>
        <button
          onClick={handleDevelopmentClick}
          className="text-purple-600 hover:text-purple-800 transition-colors"
          title="Development Tasks"
        >
          <FontAwesomeIcon icon={faCode} size="lg" />
        </button>
      </div>
      <ul className="flex-1 overflow-y-auto">
        {projects.map((project) => (
          <li
            key={project.id}
            className={`cursor-pointer p-2 rounded-md mb-1 ${
              selectedProjectId === project.id ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100'
            }`}
            onClick={() => {
              setSelectedProjectId(project.id);
              setActiveTab('pending'); // Reset to pending tasks when selecting a project
            }}
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