import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos:Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      
      this.todos = todos;
      console.log(this.todos);
    });
  }

  deleteTodo(todo: Todo) {
    console.log("making the delete request to service");

    this.todoService.deleteTodo(todo).subscribe(res => {
      console.log(res);
      if(!res.error) {
        this.todos = this.todos.filter(t => t.id !== todo.id)
      } else {
        console.log(res.error);
      }
    })
  }

  addTodo(todo: Todo) {
    console.log("yes");
    
    this.todoService.addTodo(todo).subscribe(res => {
      console.log(res);
      this.todos.push(todo)
    })
  }


}
