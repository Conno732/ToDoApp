import { ProjectDataHandler } from "./ProjectDataHandler";
import { htmlGen } from "./HTMLGenerator";
//UI makes a request to this module to display or update content
// this module contact ProjectDataHandler to aquire the data from local storage and/or submit data.

const NavBarHandler = (() => {
  function startup() {
    const projectList = ProjectDataHandler.getProjectList();
    const projects = Object.getOwnPropertyNames(projectList);
    projects.forEach((element) => {
      if (element === "Inbox" || element === "Week" || element === "Today")
        return;
      addProject(projectList[element]);
    });
  }

  function addProject(project, newBtn) {
    const projList = document.getElementById("project-list");
    let projBtn = null;
    if (newBtn) {
      let projObj = ProjectDataHandler.getProjectData(project);
      console.log(projObj);
      projBtn = htmlGen.generateProjectBtn(projObj);
    } else {
      projBtn = htmlGen.generateProjectBtn(project);
    }
    projList.appendChild(projBtn);
  }

  function removeProject(project) {
    const projBtn = document.querySelector(`#${project}.nav-btn`);
    const projList = document.getElementById("project-list");
    projList.removeChild(projBtn);
  }

  return { startup, addProject };
})();

export { NavBarHandler };
