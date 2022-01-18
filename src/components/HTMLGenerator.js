import { ProjectDataHandler } from "./ProjectDataHandler";

//Creates HTML and returns it also adds event listeners for some buttons

//remove-btn, date-in, project-btn, done-btn

const htmlGen = (() => {
  function generateProject(project) {
    const projectBase = document.createElement("div");
    projectBase.id = project["title"];
    projectBase.classList.add("project-base");
    projectBase.appendChild(generateProjectHeader(project));
    projectBase.appendChild(generateTaskList(project));
    return projectBase;
  }

  function generateProjectHeader(project) {
    const header = document.createElement("div");
    const title = document.createElement("h1");
    title.innerText = project["title"];
    header.classList.add("project-header");
    header.appendChild(title);
    const headerleft = document.createElement("div");
    headerleft.appendChild(newTaskBtn(project));
    headerleft.appendChild(projDelete());
    header.appendChild(headerleft);

    return header;
  }

  function generateTaskList(project) {
    const taskList = generateTasks(project);
    taskList.classList.add("task-list");
    return taskList;
  }

  function generateTasks(project) {
    const listDiv = document.createElement("div");
    const taskList = Object.getOwnPropertyNames(project.taskList);
    taskList.forEach((e) => {
      listDiv.appendChild(generateTask(project.taskList[e], project["title"]));
    });
    return listDiv;
  }

  function generateTask(task, projTitle) {
    const taskDiv = document.createElement("div");
    taskDiv.dataset.taskdata = projTitle;
    taskDiv.dataset.title = task["title"];
    taskDiv.classList = "task";
    taskDiv.id = task["title"] + "-task";
    taskDiv.innerHTML = `
      <div class="task-side">
        <input class="task-vals" type="checkbox" value="${task["checkbox"]}" class="done-btn">
        <input  value="${task["title"]}" class="task-title task-vals">
      </div>
      <div  class="task-side">
        <input class="task-vals" type="date" value="${task["due"]}">
        <button id="${task["title"]}" class="remove-btn">X</button>
      </div>`;
    return taskDiv;
  }

  function newTaskBtn(project) {
    const newTask = document.createElement("button");
    newTask.classList = "new-task";
    newTask.innerText = "+ Add Task";
    return newTask;
  }

  function projDelete() {
    const newTask = document.createElement("button");
    newTask.classList = "del-proj-btn";
    newTask.innerText = "Delete Project";
    return newTask;
  }

  function generateProjectBtn(project) {
    const projbtn = document.createElement("button");
    projbtn.innerText = project["title"];
    projbtn.id = project["title"];
    projbtn.classList.add("nav-btn");
    return projbtn;
  }

  return { generateProject, generateProjectBtn };
})();

export { htmlGen };
