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


  return (
    <main className="h-screen my-8 flex gap-8">
      <NoProjectSelected />
      <ProjectSideBar
        projects={projectState.projects}
      />
    </main>
  )
}

export default App