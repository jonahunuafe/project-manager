// import React from 'react'
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  const [projectState, setProjectState] = useState(
    {
      selectedProjectId: undefined,
      projects: [],
      tasks: []
    }
  );

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


  return (
    <main className="h-screen my-8 flex gap-8">
      <NoProjectSelected />
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject} 
      />
    </main>
  )
}

export default App