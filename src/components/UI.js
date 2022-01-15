//this function should just add the listeners, and have them call a seperate function

function startup() {
  addListeners();
}

function addListeners() {
  const buttons = document.querySelectorAll(".nav-btn");
  buttons.forEach((e) => {
    e.addEventListener("click", () => {
      console.log(e.id);
    });
  });
}

export { startup };
