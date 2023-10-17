export class Task {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isCompleted = false;
    this.assignedUser = null;
  }
  assignTo(user) {
    this.assignedUser = user;
  }
  changeStatus() {
    if (this.isCompleted) {
      this.isCompleted = false;
      return "In Progress";
    } else {
      this.isCompleted = true;
      return "Completed";
    }
  }
}
export class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  getInfo() {
    return `User info :
    ID : ${this.id}
    NAME: ${this.name}`;
  }
}
export class Project {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  getProjectInfo() {
    const taskList = this.tasks.map(
      (task) =>
        `${task.title} - Status: ${
          task.isCompleted ? "Completed" : "In Progress"
        }`
    );
    return `Project info :
    ID : ${this.id}
    TITLE : ${this.title}
    TASKS : ${taskList.join("\n")}`;
  }
}

export default Task;
