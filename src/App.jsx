// import React from 'react'
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState(
    {
      selectedProjectId: undefined,
      projects: [],
      tasks: []
    }
  );

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    });
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)

  let content = (
    <SelectedProject 
      project={selectedProject} 
      onAddTask={handleAddTask}
      tasks={projectState.tasks}
    />
  );


  return (
    <main className="h-screen my-8 flex gap-8">
      <NoProjectSelected />
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId} 
      />
      
    </main>
  )
}

export default App