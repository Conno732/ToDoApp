import { ProjectDataHandler } from "./ProjectDataHandler";
import { htmlGen } from "./HTMLGenerator";
//UI makes a request to this module to display or update content
// this module contact ProjectDataHandler to aquire the data from local storage and/or submit data.

const ProjectHandler = (() => {
  const projectView = document.getElementById("project-view");

  function startup() {
    ProjectDataHandler.startup();
    displayProject("Inbox");
    // testing();
  }

  function displayProject(id) {
    const projectData = loadProjectData(id);
    cleanProjectView();
    projectView.appendChild(htmlGen.generateProject(projectData));
  }

  function loadProjectData(id) {
    const project = ProjectDataHandler.getProjectData(id);
    return project;
  }

  function addProject(title) {
    ProjectDataHandler.addProject(title);
  }

  function removeProject(title) {
    ProjectDataHandler.removeProject(title);
  }

  function addTask(projectTitle, taskData) {
    ProjectDataHandler.addTask(projectTitle, taskData);
  }

  function removeTask(task) {
    const proj = task.dataset.taskdata;
    const taskName = task.dataset.title;
    ProjectDataHandler.removeTask(proj, taskName);
  }

  function modifyTask() {}

  function cleanProjectView() {
    while (projectView.firstChild) {
      projectView.removeChild(projectView.firstChild);
    }
  }

  function testing(param) {
    if (param) {
      ProjectDataHandler.clearAll();
      return;
    }
    ProjectDataHandler.addProject("My-Project");

    ProjectDataHandler.addProject("Other-proj");
  }

  return { displayProject, startup, removeTask, addTask, addProject };
})();

export { ProjectHandler };
