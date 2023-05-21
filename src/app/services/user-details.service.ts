import { Injectable } from '@angular/core';
import { UserDetails } from '../models/user-details';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
 private url="User"
  constructor(private http: HttpClient) { }
  
  public getUserDetails():Observable<UserDetails[]>{
       return this.http.get<UserDetails[]>(`${environment.apiUrl}/${this.url}`);
  }
  
  public updateUserDetails(users: UserDetails): Observable<UserDetails[]> {
    return this.http.put<UserDetails[]>(
      `${environment.apiUrl}/${this.url}`,
      users
    );
  }

  public createUser(users: UserDetails): Observable<UserDetails[]> {
    return this.http.post<UserDetails[]>(
      `${environment.apiUrl}/${this.url}`,
      users
    );
  }

  public deleteUser(users: UserDetails): Observable<UserDetails[]> {
    return this.http.delete<UserDetails[]>(
      `${environment.apiUrl}/${this.url}/${users.id}`
    );
  }
}
