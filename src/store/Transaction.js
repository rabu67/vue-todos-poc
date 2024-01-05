import { defineStore } from "pinia";

export const useTranStore = defineStore({
  id: "transaction",
  state: () => ({
    taskList: [
      { id: 1, text: "Prepare docs", completed: false, assignee: 'Raj' },
      { id: 2, text: "Spring V3 Migration", completed: false, assignee: 'Raju' },
      { id: 3, text: "Close the story", completed: false, assignee: 'Tanaji' },
      { id: 4, text: "Analytics catch up", completed: true , assignee: 'Ruchika'},
      { id: 5, text: "Simulator work", completed: true, assignee: 'Basha' },
    ],
  }),
  actions: {
    addNewTask(transaction) {
      console.log("new tran", transaction);
      this.taskList.push({
        id: Math.floor(Math.random() * 1000000),
        text: transaction.text,
        completed: false,
        assignee: transaction.assignee
      });
    },
    moveToDone(id) {
      console.log("id which is completed", id);
      var taskToUpdate = this.taskList.find(task => task.id == id);
      taskToUpdate.completed = true;
      console.log(this.taskList);
    },
    deleteTask(id) {
      console.log("id needs to be deleted", id);
      this.taskList = this.taskList.filter(task => task.id != id);
    }
  },
  getters: {
    closedTask() {
      return this.taskList.filter((task) => task.completed == true);
    },
    activeTask() {
      return this.taskList.filter((task) => task.completed == false);
    },
    completedCount() {
      return this.closedTask.length;
    },
    activeCount() {
      return this.activeTask.length;
    },
    totalCount() {
      return this.taskList.length;
    },
  },
});
