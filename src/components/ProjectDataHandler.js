//ProjectDataHandler handles data from localStorage to Object form, and vis versa
//  requires startup to do initial retrieval of the object containing all data
//  either removes data by an ID, or adds data given by an object
// ALSO handles requests to edit the data of the objects

// the handled data works as follows allprojects -> project -> task -> taskproperties

const AllProjectsID = "SuperCoolStuffs";

const ProjectDataHandler = (() => {
  const ProjectsList = {};
  function startup() {
    ProjectsList.projects = JSON.parse(localStorage.getItem(AllProjectsID));
    initStockProjects();
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

  //cure-all for modifying task data
  function modifyTask(title, task, data) {}

  //check if inbox, week, today exist, otherwise add them
  //potentially have func to initialize each proj
  function initStockProjects() {
    if (!("Inbox" in ProjectsList.projects)) {
      ProjectsList.projects.Inbox = { title: "Inbox", taskList: {} };
    }
    if (!("Today" in ProjectsList.projects)) {
      ProjectsList.projects.Today = { title: "Today", taskList: {} };
    }
    if (!("Week" in ProjectsList.projects)) {
      ProjectsList.projects.Week = { title: "Week", taskList: {} };
    }
    updateLocalStorage();
  }

  //Return the project data
  function getProjectData(id) {
    return ProjectsList.projects[id];
  }

  function getProjectList() {
    return ProjectsList.projects;
  }

  function clearAll() {
    ProjectsList.projects = {};
    initStockProjects();
    updateLocalStorage();
  }

  //whenever The object is modified, update the local Storage
  function updateLocalStorage() {
    localStorage.setItem(AllProjectsID, JSON.stringify(ProjectsList.projects));
  }

  return {
    startup,
    getProjectData,
    addTask,
    removeTask,
    modifyTask,
    removeProject,
    addProject,
    getProjectList,
    clearAll,
  };
})();

export { ProjectDataHandler };
