import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/userservice';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  baseUrl='http://localhost:8000/api/users';
  constructor(private httpClient: HttpClient) { }
  getAllUsers(): Observable<Users[]>  {
    return this.httpClient.get<Users[]>(this.baseUrl);
  }
  createUser(user: Users): Observable<Users> {
    return this.httpClient.post<Users>(this.baseUrl, user);    
  }
  getUserById(id: number) : Observable<Users> {
    return this.httpClient.get<Users>(this.baseUrl+ '/' +id);

  }
  deleteUserById(id: number): Observable<Users> {
    return this.httpClient.delete<Users>(this.baseUrl + '/' + id);
  }
  updateUser(user: Users): Observable<Users> {
    return this.httpClient.put<Users>(this.baseUrl+ '/'+ user.id, user);
  }

}
