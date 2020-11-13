import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Room } from '../../room';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.sass']
})
export class RoomCreateComponent implements OnInit {
  nameControl: FormControl;

  constructor(private roomsService: RoomsService,
              private router: Router){ }

  ngOnInit(): void {
    const {required, minLength} = Validators;
    this.nameControl = new FormControl('', [required, minLength(5)]);
  }

  createRoom(): void {
    const room = {name: this.nameControl.value};
    this.roomsService.create(room).subscribe(
      () => this.router.navigateByUrl('/rooms/list')
    );
  }
}
