import { ProjectDataHandler } from "./ProjectDataHandler";

//UI makes a request to this module to display or update content
// this module contact ProjectDataHandler to aquire the data from local storage and/or submit data.

const ProjectHandler = (() => {
  const projectView = document.getElementById("project-view");

  function startup() {
    ProjectDataHandler.startup();
    displayProject("Inbox");
    testing();
  }

  function displayProject(id) {
    const projectData = loadProjectData(id);
    cleanProjectView();

    projectView.appendChild(projectHTMLGen(projectData));
  }

  function loadProjectData(id) {
    const project = ProjectDataHandler.getProjectData(id);
    //console.log(project);
    return project;
  }

  function addTask() {}

  function removeTask() {}

  function modifyTask() {}

  function cleanProjectView() {
    while (projectView.firstChild) {
      projectView.removeChild(projectView.firstChild);
    }
  }

  function taskHTMLGen(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerText = task["title"] + " " + task["due"];
    return taskDiv;
  }

  function generateTasks(project) {
    const listDiv = document.createElement("div");
    const taskList = Object.getOwnPropertyNames(project.taskList);
    taskList.forEach((e) => {
      listDiv.appendChild(taskHTMLGen(project.taskList[e]));
    });
    return listDiv;
  }

  function projectHTMLGen(project) {
    const projectBase = document.createElement("div");
    projectBase.id = project["title"];
    const header = document.createElement("div");
    const title = document.createElement("h1");
    const taskList = generateTasks(project);
    taskList.classList.add("task-list");
    header.classList.add("project-header");
    projectBase.classList.add("project-base");
    projectBase.appendChild(header);

    header.appendChild(title);

    title.innerText = project["title"];

    projectBase.appendChild(taskList);
    return projectBase;
  }

  function testing() {
    ProjectDataHandler.addProject("My-Project");
    ProjectDataHandler.addTask("My-Project", { title: "Go", due: "last year" });
    ProjectDataHandler.addTask("My-Project", { title: "Godo", due: "last s" });
    ProjectDataHandler.addTask("Inbox", { title: "Godd", due: "last year" });
  }

  return { displayProject, startup };
})();

export { ProjectHandler };
