import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Credentials } from './credentials';
import { Token } from './token';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private token: Token;
  private user: User;
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {
  }

  register(credentials: Credentials): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }

  login(credentials: Credentials): Observable<any> {
    return this.http.post<Token>(this.apiUrl + '/login', credentials).pipe(
      tap(token => {
        this.token = token;
        this.user = {
          id: token.userId,
          email: credentials.email
        };
      })
    );
  }

  params(): { params: { access_token: string } } {
    return {
      params: {
        access_token: this.token.id
      }
    };
  }

  logout(): Observable<any> {
    return this.http.post(this.apiUrl + '/logout', {}, this.params()).pipe(
      tap(() => this.user = null)
    );
  }
}
