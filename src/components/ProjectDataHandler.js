//ProjectDataHandler handles data from localStorage to Object form, and vis versa
//  requires startup to retrieve object containing all data
//  either removes data by an ID, or adds data given by an object
// ALSO handles requests to edit the data of the objects

// the handled data works as follows allprojects -> project -> task -> taskproperties

const AllProjectsID = "SuperCoolStuffs";

const ProjectDataHandler = (() => {
  const ProjectsList = {};
  function startup() {
    ProjectsList.projects = JSON.parse(localStorage.getItem(AllProjectsID));
    addProject("CusturdStuf");
    addTask("CusturdStuf", {
      title: "fill",
      due: "duedate",
    });
    removeTask("CusturdStuf", "fill");
    console.log(ProjectsList.projects);
  }

  //returns nothing, creates new project with given title
  function addProject(title) {
    let newProject = { title, taskList: {} };
    ProjectsList.projects[title] = newProject;
    updateLocalStorage();
  }

  //returns nothing, takes an id of object
  function removeProject(title) {
    delete ProjectsList.projects[title];
    updateLocalStorage();
  }

  //adds task to project data ASSUME that DATA is valid
  function addTask(title, data) {
    ProjectsList.projects[title].taskList[data["title"]] = data;
    updateLocalStorage();
  }

  //remove task
  function removeTask(title, task) {
    delete ProjectsList.projects[title].taskList[task];
    updateLocalStorage();
  }

  //for the sake of ensuring no duplicate tasks are entered
  function getTaskList(title) {
    return ProjectsList[title].taskList;
  }

  //cure-all for modifying task data
  function modifyTaskData(title, task, data) {}

  //check if inbox, week, today exist, otherwise add each
  function initStockProjects() {}

  //Return the project data
  function getProjectData(title) {}

  //whenever The object is modified, update the local Storage
  function updateLocalStorage() {
    localStorage.setItem(AllProjectsID, JSON.stringify(ProjectsList.projects));
  }

  return { startup, getProjectData, addTask, getTaskList, removeProject };
})();

export { ProjectDataHandler };
