import { Component, OnInit } from '@angular/core';
import { Credentials } from '../credentials';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  error = null;
  success = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  register(credentials: Credentials): void {
    this.success = null;
    this.error = null;
    this.userService.register(credentials).subscribe(
      user => {
        this.success = true;
      },
      error => {
        this.error = error;
      }
    );
  }
}
