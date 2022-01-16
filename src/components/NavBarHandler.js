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

  function addProject(project) {
    const projList = document.getElementById("project-list");
    const projBtn = htmlGen.generateProjectBtn(project);
    projList.appendChild(projBtn);
  }

  function removeProject(project) {}

  return { startup };
})();

export { NavBarHandler };
