import { ProjectDataHandler } from "./ProjectDataHandler";
import { ProjectHandler } from "./ProjectSectionHandler";
import { NavBarHandler } from "./NavBarHandler";

//This handles the top level of the project
//  Mainly the UI will handle events and call the appropriate function
//  starts ProjectDataHandler

//Starts the show, oh yeah...
//automatically loads 'inbox'
//will need to load in all custom projects into navbar
function startup() {
  addAllListeners();
  ProjectDataHandler.startup();
  //NavBarHandler.loadContent();
  //ProjectHandler.loadContent("inbox");
}

//This function will take in the id of the element triggered
//  and call the appropriate function
function onClickHandler() {}

//Purely EventListeners below

function addAllListeners() {
  addNavBtnListeners();
}

function addNavBtnListeners() {
  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach((e) => {
    e.addEventListener("click", () => {
      console.log(e.id);
    });
  });
}

export { startup };
