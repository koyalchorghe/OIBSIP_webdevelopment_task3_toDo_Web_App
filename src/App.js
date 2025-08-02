
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProjectView from './components/ProjectView';
import './index.css';

const App = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Project Alpha',
      description: 'Initial project for development',
      tasks: []
    },
    {
      id: 2,
      name: 'Marketing Plan',
      description: 'Plan for marketing strategies',
      tasks: []
    }
  ]);

  const [selectedProjectId, setSelectedProjectId] = useState(1);

  const addProject = (name, description) => {
    const newProject = {
      id: Date.now(),
      name,
      description,
      // deadlineDate: deadlineDate || new Date(),
      tasks: []
      // deadlineDate: deadlineDate || new Date(),
    };
    setProjects([...projects, newProject]);
  };

  const updateProjectTasks = (projectId, updatedTasks) => {
    setProjects(projects.map(p => p.id === projectId ? { ...p, tasks: updatedTasks } : p));
  };

  const selectedProject = projects.find(p => p.id === selectedProjectId);

  return (
    <div className="flex h-screen">
      <Sidebar
        projects={projects}
        selectedProjectId={selectedProjectId}
        setSelectedProjectId={setSelectedProjectId}
        addProject={addProject}
      />
      <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">{selectedProject?.name}</h1>
        <p className="text-gray-600 mb-4">{selectedProject?.description}</p>
         
        {selectedProject && (
          <ProjectView
            project={selectedProject}
            updateTasks={(tasks) => updateProjectTasks(selectedProject.id, tasks)}
          />
        )}
      </div>
    </div>
  );
};

export default App;