import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.userService.logout().subscribe(
      () => {
        this.router.navigateByUrl('/');
      }
    );
  }

  cancel(): void {
    this.router.navigateByUrl('/');
  }
}
