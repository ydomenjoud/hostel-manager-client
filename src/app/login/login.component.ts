import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from '../credentials';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(credentials: Credentials): void {
    this.error = null;
    this.userService.login(credentials).subscribe(
      () => {
        this.router.navigateByUrl('/');
      },
      error => {
        this.error = error;
      }
    );
  }
}
