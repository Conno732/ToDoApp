import { ProjectDataHandler } from "./ProjectDataHandler";
import { htmlGen } from "./HTMLGenerator";
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

    projectView.appendChild(htmlGen.generateProject(projectData));
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

  function testing() {
    ProjectDataHandler.addProject("My-Project");
    ProjectDataHandler.addTask("My-Project", {
      title: "Go",
      due: "2018-12-31",
    });
    ProjectDataHandler.addTask("My-Project", {
      title: "Godo",
      due: "2018-12-31",
    });
    ProjectDataHandler.addTask("My-Project", {
      title: "22Go",
      due: "2018-12-31",
    });
    ProjectDataHandler.addTask("My-Project", {
      title: "Go33do",
      due: "2018-12-31",
    });
    ProjectDataHandler.addTask("My-Project", {
      title: "G33o",
      due: "2018-12-31",
    });
    ProjectDataHandler.addTask("My-Project", {
      title: "Godfdfdfo",
      due: "2018-12-31",
    });
    ProjectDataHandler.addTask("My-Project", {
      title: "22vvGo",
      due: "2018-12-31",
    });
    ProjectDataHandler.addTask("My-Project", {
      title: "Go3ssadas3do",
      due: "2018-12-31",
    });
    ProjectDataHandler.addTask("My-Project", {
      title: "22vvgg12Go",
      due: "2018-12-31",
    });
    ProjectDataHandler.addTask("My-Project", {
      title: "Go3ccccssadas3do",
      due: "2018-12-31",
    });
    ProjectDataHandler.addTask("My-Project", {
      title: "Godssadas3do",
      due: "2018-12-31",
    });

    ProjectDataHandler.addTask("Inbox", { title: "Godd", due: "2018-12-31" });
  }

  return { displayProject, startup };
})();

export { ProjectHandler };
