import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { Room } from '../../room';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.sass']
})
export class RoomDetailComponent implements OnInit {
  room: Room;

  constructor(private route: ActivatedRoute,
              private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      // récupération de l'id dans les params
      map(params => params.id),
      // récupération de la room depuis l'API
      switchMap(id => this.roomsService.get(id)),
      // stockage de la room récupérée depuis l'API dans le composant
      tap((room: Room) => this.room = room)
    ).subscribe();
  }

}
