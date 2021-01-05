import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Constent-Type' : 'application/json',
    // "Access-Control-Allow-Origin": "*",
    "Access-Control-Request-Headers": "*"
  })
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  URL: string = "https://ajy3tsqb2d.execute-api.eu-west-1.amazonaws.com/dev/todos"

  constructor(private http: HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get <Todo[]> (this.URL) 
  }

  addTodo(todo: Todo):Observable<Todo> {
    return this.http.post <any> (this.URL, todo)
  }
}
