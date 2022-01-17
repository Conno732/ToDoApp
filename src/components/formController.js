//this will control the form that appears when adding a task or project

const form = (() => {
  function newForm(type) {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "flex";
    if (type === "task") {
      overlay.appendChild(generateTaskForm());
    } else if (type === "project") {
      overlay.appendChild(generateProjectForm());
    }
  }

  function generateTaskForm() {
    const base = document.createElement("div");
    base.classList = "form";
    base.innerHTML = `
  <div class = "form-entries">
    <label>Task name:</label>
    <input id="form-title" required/><br>
    <label>Due date:</label>
    <input id='form-date' type="date" required><br>
    <button id="submit" type="submit">Submit</button>
  </div>`;
    return base;
  }

  function generateProjectForm() {
    const base = document.createElement("div");
    base.classList = "form";
    base.innerHTML = `
  <div class = "form-entries">
    <label>Task name:</label>
    <input id="form-title" required/><br>
    <button id="submit" type="submit">Submit</button>
  </div>`;
    return base;
  }

  function removeForm() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    while (overlay.firstChild) {
      overlay.removeChild(overlay.firstChild);
    }
  }

  return { newForm, removeForm };
})();

export { form };
