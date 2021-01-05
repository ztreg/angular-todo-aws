import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  todo: Todo;
  constructor() { }

  ngOnInit(): void {
  }

  onToggle(todo: Todo) {
    console.log("toggling todo to service");
    
  }

  onDelete(todo: Todo) {
    console.log("deleting todo event to list");
    
  }

}
