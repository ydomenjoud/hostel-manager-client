import { Component, OnInit } from '@angular/core';
import { Room } from '../../room';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.sass']
})
export class RoomsListComponent implements OnInit {
  roomsList: Room[];

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {

   this.roomsService.list().subscribe(
     roomsList => {
       this.roomsList = roomsList;
     }
   );

  }

}
