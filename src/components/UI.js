import { ProjectDataHandler } from "./ProjectDataHandler";
import { ProjectHandler } from "./ProjectDisplayHandler";
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
  ProjectHandler.displayProject("Inbox");
  //NavBarHandler.loadContent();
}

//This function will take in the id of the element triggered
//  and call the appropriate function
function onClickHandler(e) {
  //close, date, new-proj, select-proj
  console.log(e.id);
}

//Purely EventListeners below

function addAllListeners() {
  addNavBtnListeners();
}

function addNavBtnListeners() {
  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach((e) => {
    e.addEventListener("click", () => {
      onClickHandler(e);
    });
  });
}

export { startup };
