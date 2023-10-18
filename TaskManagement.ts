export class Task {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public isCompleted: boolean,
    public assignedUser: null | User
  ) {}
  assignTo(user: User) {
    this.assignedUser = user;
  }
  changeStatus(isCompleted: boolean) {
    if (isCompleted) {
      isCompleted = false;
      return "In Progress";
    } else {
      isCompleted = true;
      return "Completed";
    }
  }
}
export class User {
  constructor(public id: number, public name: string) {}
  getInfo() {
    return `User info :
    ID : ${this.id}
    NAME: ${this.name}`;
  }
}
export class Project {
  constructor(
    public id: number,
    public title: string,
    public tasks: Array<Task> = []
  ) {}
  addTask(task: Task) {
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
