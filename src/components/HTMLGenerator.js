//Creates HTML and returns it

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
      console.log(e);
      listDiv.appendChild(generateTask(project.taskList[e]));
    });
    return listDiv;
  }

  function generateTask(task) {
    const taskDiv = document.createElement("div");
    const leftSide = document.createElement("div");
    const rightSide = document.createElement("div");
    taskDiv.classList = "task";
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
    return taskRemove;
  }

  function generateDateIn(task) {
    const taskDate = document.createElement("input");
    taskDate.type = "date";
    taskDate.value = task["due"];
    return taskDate;
  }

  function generateDoneBtn(task) {
    const taskDone = document.createElement("button");
    taskDone.classList = "done-btn";
    return taskDone;
  }
  //*****generate task components

  function generateProjectBtn(task) {}

  return { generateProject };
})();

export { htmlGen };
