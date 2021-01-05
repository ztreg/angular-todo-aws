import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  title: string;
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("onsubmit");
    
    const todo = {
      id: "55342",
      title: this.title,
      completed: false
    };
    this.addTodo.emit(todo)

  }

}
