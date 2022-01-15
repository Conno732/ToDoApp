import { ProjectDataHandler } from "./ProjectDataHandler";

//UI makes a request to this module to display or update content
// this module contact ProjectDataHandler to aquire the data from local storage and/or submit data.

const ProjectHandler = (() => {
  const projectView = document.getElementById("project-view");
  function displayProject(id) {
    loadProjectData(id);
  }

  function loadProjectData(id) {
    const inbox = ProjectDataHandler.getProjectData(id);
    console.log(inbox);
  }

  function taskHTMLGen() {}

  function projectHTMLGen() {}

  function testing() {}

  return { displayProject, testing };
})();

export { ProjectHandler };
