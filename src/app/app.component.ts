import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do App';

  task: string;
  toDoList: Array<string> = [];
  doneList: Array<string> = [];

  addDoList() {
    if (this.task !== undefined) {
      this.toDoList.push(this.task);
    }
    this.task = '';
  }

  deleteDoList(index: number) {
    this.toDoList.splice(index, 1);
  }

  addDoneList(index: number) {
    this.doneList.push(this.toDoList[index]);
    this.deleteDoList(index);
  }

  deleteDoneList(index: number) {
    this.doneList.splice(index, 1);
  }
}
