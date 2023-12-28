import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSideBar from "./components/ProjectsSideBar.jsx";

function App() {

  const[projectsState, setProjectState] = useState({
    selectedProjectId:undefined, 
    projects:[]
  });

  function handleStartAddProject () {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId:null
      }
    })
  }

  function handleAddProject (projectData) {
    setProjectState(prevState => {
      const newProject = {
        ...projectData, 
        id: Math.random()
      }

    });

    return {
      ...prevState,
      projects: [prevState.projects, newProject ]
    };
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}></NewProject> 
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}></NoProjectSelected>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
