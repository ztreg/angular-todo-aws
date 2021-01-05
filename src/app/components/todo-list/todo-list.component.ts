import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos:Todo[]
  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    console.log("making the delete request to service");
    
  }

}
