import { ProjectHandler } from "./ProjectDisplayHandler";
import { NavBarHandler } from "./NavBarHandler";

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
    addNavBtnListeners();
  } else if (classVal.contains("remove-btn")) {
    const task = document.getElementById(e.id + "-task");
    task.parentElement.removeChild(task);
    ProjectHandler.removeTask(task);
  } else if (classVal.contains("new-task")) {
    ProjectHandler.addTask(e.parentElement.parentElement);
    ProjectHandler.displayProject(e.parentElement.parentElement.id);
    addProjectListeners();
  } else {
    //project buttons
    ProjectHandler.displayProject(e.id);
    addProjectListeners();
  }
}

//Purely EventListeners below

function addAllListeners() {
  addNavBtnListeners();
  addProjectListeners();
}

function addProjectListeners() {
  addTaskListeners();
  newTaskListeners();
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
