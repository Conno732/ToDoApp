import { ProjectHandler } from "./ProjectDisplayHandler";
import { NavBarHandler } from "./NavBarHandler";
import { form } from "./formController";

//This handles the top level of the project
//  Mainly the UI will handle events and call the appropriate function
//  starts ProjectDataHandler

//Starts the show, oh yeah...
//automatically loads 'inbox'
//will need to load in all custom projects into navbar
function startup() {
  ProjectHandler.startup();
  NavBarHandler.startup();
  addAllListeners();
}

//This function will take in the id of the element triggered
//  and call the appropriate function
function onClickHandler(e) {
  //remove-btn, date-in, project-btn, done-btn, new-task, remove-proj-btn
  const classVal = e.classList;
  //add a chain of if/else or switch to see if proj or proj modifier was selected
  if (classVal.contains("project-btn")) {
    form.removeForm();
    form.newForm("project");
    document.getElementById("submit").addEventListener("click", (element) => {
      onProjectFormSubmit();
    });
  } else if (classVal.contains("remove-btn")) {
    const task = document.getElementById(e.id + "-task");
    task.parentElement.removeChild(task);
    ProjectHandler.removeTask(task);
  } else if (classVal.contains("new-task")) {
    form.newForm("task");
    document.getElementById("submit").addEventListener("click", (element) => {
      onTaskFormSubmit();
    });
  } else {
    //project buttons
    ProjectHandler.displayProject(e.id);
    addProjectListeners();
  }
}

function onTaskFormSubmit(e) {
  const taskTitle = document.getElementById("form-title").value;
  const taskDate = document.getElementById("form-date").value;
  const projTitle = document.querySelector(".project-base").id;
  if (!(taskDate && taskTitle)) return;
  //check if taskTitle is original
  const taskObj = {};
  taskObj["title"] = taskTitle;
  taskObj["due"] = taskDate;
  taskObj["checkbox"] = "unchecked;";
  ProjectHandler.addTask(projTitle, taskObj);
  ProjectHandler.displayProject(projTitle);
  form.removeForm();
  addProjectListeners();
}

function onProjectFormSubmit() {
  const projTitle = document.getElementById("form-title").value;
  ProjectHandler.addProject(projTitle);
  NavBarHandler.addProject(projTitle, true);
  form.removeForm();
  addNavBtnListeners();
}

//Purely EventListeners below

function addAllListeners() {
  addNavBtnListeners();
  addProjectListeners();
}

function addProjectListeners() {
  addTaskListeners();
  newTaskListeners();
  removeProjectListener();
}

function removeProjectListener() {
  document
    .querySelector(`#${"Inbox"}.nav-btn`)
    .addEventListener("click", () => {
      console.log("works");
    });
}

function addTaskListeners() {
  addRemoveListeners();
}

function addNewTaskListeners() {}

function addNavBtnListeners() {
  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach((e) => {
    e.addEventListener("click", () => {
      onClickHandler(e);
    });
  });
}

function addRemoveListeners() {
  const buttons = document.querySelectorAll(".remove-btn");
  buttons.forEach((e) => {
    e.addEventListener("click", () => {
      onClickHandler(e);
    });
  });
}

function addDateListeners() {
  const buttons = document.querySelectorAll(".date-in");
  buttons.forEach((e) => {
    e.addEventListener("click", () => {
      onClickHandler(e);
    });
  });
}

function addDoneListeners() {
  const buttons = document.querySelectorAll(".done-in");
  buttons.forEach((e) => {
    e.addEventListener("click", () => {
      onClickHandler(e);
    });
  });
}

function newTaskListeners() {
  const buttons = document.querySelectorAll(".new-task");
  buttons.forEach((e) => {
    e.addEventListener("click", () => {
      onClickHandler(e);
    });
  });
}

export { startup };
