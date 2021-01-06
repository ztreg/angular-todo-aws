import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})

export class TodoService implements OnInit{
  URL: string = "https://ajy3tsqb2d.execute-api.eu-west-1.amazonaws.com/dev/todos"
  constructor(private http: HttpClient) { }

  token: string;
  httpOptions: object;


  ngOnInit(): void {

  }

  checkToken(): void {
    Auth.currentSession().then(res=>{
      let idToken = res.getIdToken()
      this.token = idToken.getJwtToken()
      console.log('idToken:', this.token );
      this.httpOptions = {
        headers: new HttpHeaders({
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          Authorization: this.token
        })
      }
    })
  }

  getTodos():Observable<Todo[]> {
    this.checkToken()
    console.log(this.httpOptions);
    
    return this.http.get <Todo[]> (this.URL, this.httpOptions) 
  }

  addTodo(todo: Todo):Observable<Todo> {
    this.checkToken()
    return this.http.post <any> (this.URL, todo, this.httpOptions)
  }

  deleteTodo(todo: Todo):Observable<any> {
    this.checkToken()
    return this.http.delete <any> (`${this.URL}/object/${todo.id}`, this.httpOptions)
  }

  toggleCompleted(todo: Todo):Observable<Todo> {
    this.checkToken()
    return this.http.put <Todo> (`${this.URL}`, todo, this.httpOptions)
  }
}
