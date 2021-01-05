import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos:Todo[]
  constructor(private todoService: TodoService, private changeDetect: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      console.log(todos);
      this.todos = todos;
      this.changeDetect.detectChanges()
    });
  }

  deleteTodo(todo: Todo) {
    console.log("making the delete request to service");

    this.todoService.deleteTodo(todo).subscribe(res => {
      console.log(res);
      if(!res.error) {
        this.todos = this.todos.filter(t => t.id !== todo.id)
        this.changeDetect.detectChanges()
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
      this.changeDetect.detectChanges()
    })
  }


}
