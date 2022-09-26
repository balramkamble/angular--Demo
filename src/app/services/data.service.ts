import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  uri: string;

  constructor(private http: HttpClient) {
    this.uri = 'https://jsonplaceholder.typicode.com/users'
   }

   getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.uri);
   }

   getUserById(id: number = 1):Observable<User>{
    return this.http.get<User>(this.uri + id);
   }

   addUser(user:User){
    return this.http.post(this.uri, user)
   }

}
