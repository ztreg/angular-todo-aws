import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Constent-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }
}
