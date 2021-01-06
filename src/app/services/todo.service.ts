import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';
import { Auth } from 'aws-amplify';
@Injectable({
  providedIn: 'root'
})

export class TodoService {
  URL: string = "https://ajy3tsqb2d.execute-api.eu-west-1.amazonaws.com/dev/todos"
  constructor(private http: HttpClient) { }

  token: string;
  httpOptions: object

  async checkToken(): Promise<void> {
    await Auth.currentSession().then(res => {
      let idToken = res.getIdToken()
      this.token = idToken.getJwtToken()
    });
  }

  setHttpHeaders(): object {
    return {
      headers: {
        "Authorization": this.token
      }
    }
  }


  async getTodos(): Promise<Observable<Todo[]>> {
    await this.checkToken();
    return this.http.get<Todo[]>( this.URL, this.setHttpHeaders() )
  }

  async addTodo(todo: Todo): Promise<Observable<Todo>> {
    await this.checkToken();
    return this.http.post<any>(this.URL, todo, this.setHttpHeaders())
  }

  async deleteTodo(todo: Todo): Promise<Observable<any>> {
    await this.checkToken();
    return this.http.delete<any>(`${this.URL}/object/${todo.id}`, this.setHttpHeaders())
  }

  async toggleCompleted(todo: Todo): Promise<Observable<Todo>> {
    await this.checkToken();
    return this.http.put<Todo>(`${this.URL}`, todo, this.setHttpHeaders())
  }
}
