import "./styles/index.css";
import { startup } from "./components/UI";

//title, description, dueDate and priority
let task1 = {
  title: "hi",
  due: "duedate",
};

let taskList = { task1, task1, task1 };

let inbox = { title: "title1", taskList };
let today = { title: "title2", taskList };
let week = { title: "title2", taskList };
let custom = { title: "title2", taskList };

let allObjects = { inbox, today, week, custom };
localStorage.setItem("SuperCoolStuffs", JSON.stringify(allObjects));

startup();
