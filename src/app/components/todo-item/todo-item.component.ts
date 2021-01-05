import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService, private changeDetect: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onToggle(todo: Todo) {

    console.log("toggling todo to service");
    todo.completed = !todo.completed
    this.todoService.toggleCompleted(todo).subscribe(res => {
      console.log(res);
      this.changeDetect.detectChanges()
    })
    
  }

  onDelete(todo: Todo) {
    console.log("deleting todo event to list");
    this.deleteTodo.emit(todo)
  }

}
