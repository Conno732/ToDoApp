//this will control the form that appears when adding a task or project

const form = (() => {
  function newProjectForm() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
    overlay.appendChild(generateProjectForm());
  }

  function newTaskForm(project) {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
    overlay.appendChild(generateTaskForm());
  }

  function generateProjectForm() {
    const base = document.createElement("div");
    base.classList = "form";
    const title = document.createElement("input");
    title.type = "text";
    return base;
  }

  function generateTaskForm() {
    const base = document.createElement("div");
    base.classList = "form";
    return base;
  }

  return { newProjectForm, newTaskForm };
})();

export { form };
