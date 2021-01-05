import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
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
    var uuid1 = uuidv4();
    console.log(uuid1);
    
    const todo = {
      id: uuid1,
      title: this.title,
      completed: false
    };
    this.addTodo.emit(todo)

  }

}
