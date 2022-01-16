//this will control the form that appears when adding a task or project

const form = (() => {
  function projectForm() {}

  function taskForm(project) {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
    overlay.appendChild(genTaskForm());
  }

  function genTaskForm() {
    const base = document.createElement("div");
    base.classList = "form";
    const htmlForm = document.createElement("form");

    return base;
  }

  return { projectForm, taskForm };
})();

export { form };
