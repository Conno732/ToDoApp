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
    header.appendChild(newTaskBtn(project));

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
    const leftSide = document.createElement("div");
    const rightSide = document.createElement("div");
    taskDiv.dataset.taskdata = projTitle;
    taskDiv.dataset.title = task["title"];
    taskDiv.classList = "task";
    taskDiv.id = task["title"] + "-task";
    leftSide.classList = "task-side";
    rightSide.classList = "task-side";

    leftSide.appendChild(generateDoneBtn(task));
    leftSide.appendChild(generateTaskTitle(task));

    rightSide.appendChild(generateDateIn(task));
    rightSide.appendChild(generateRemoveBtn(task));

    taskDiv.appendChild(leftSide);
    taskDiv.appendChild(rightSide);

    return taskDiv;
  }
  //generate task components
  function generateTaskTitle(task) {
    const taskTitle = document.createElement("input");
    taskTitle.value = task["title"];
    taskTitle.classList = "task-title";
    return taskTitle;
  }

  function generateRemoveBtn(task) {
    const taskRemove = document.createElement("button");
    taskRemove.classList = "remove-btn";
    taskRemove.innerText = "X";
    taskRemove.id = task["title"];
    return taskRemove;
  }

  function generateDateIn(task) {
    const taskDate = document.createElement("input");
    taskDate.type = "date";
    taskDate.value = task["due"];
    return taskDate;
  }

  function generateDoneBtn(task) {
    const taskDone = document.createElement("input");
    taskDone.type = "checkbox";
    taskDone.classList = "done-btn";
    return taskDone;
  }
  //*****generate task components

  function newTaskBtn(project) {
    const newTask = document.createElement("button");
    newTask.classList = "new-task";
    newTask.innerText = "+ Add Task";
    return newTask;
  }

  function projDelete(project) {}

  function generateProjectBtn(task) {}

  return { generateProject };
})();

export { htmlGen };
