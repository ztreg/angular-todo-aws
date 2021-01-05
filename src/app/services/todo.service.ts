import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    "x-api-key": "key here guis"
  })
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  URL: string = "https://ajy3tsqb2d.execute-api.eu-west-1.amazonaws.com/dev/todos"

  constructor(private http: HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get <Todo[]> (this.URL, httpOptions) 
  }

  addTodo(todo: Todo):Observable<Todo> {
    return this.http.post <any> (this.URL, todo)
  }

  deleteTodo(todo: Todo):Observable<any> {
    return this.http.delete <any> (`${this.URL}/object/${todo.id}`)
  }

  toggleCompleted(todo: Todo):Observable<Todo> {
    return this.http.put <Todo> (`${this.URL}`, todo)
  }
}
