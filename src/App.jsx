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
      />
    </main>
  )
}

export default App