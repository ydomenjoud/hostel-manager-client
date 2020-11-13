import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Room } from '../room';



@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  private apiUrl = environment.apiUrl + 'rooms';

  constructor(private http: HttpClient) {
  }

  list(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }

  create(room: Omit<Room, 'id'>): Observable<Room> {
    return this.http.post<Room>(this.apiUrl, room);
  }

  get(id: number): Observable<Room> {
    return this.http.get<Room>(this.apiUrl + '/' + id);
  }
}
