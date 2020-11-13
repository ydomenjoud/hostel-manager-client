import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { RoomCreateComponent } from './rooms/room-create/room-create.component';
import { RoomDetailComponent } from './rooms/room-detail/room-detail.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';

const routes: Routes = [
  {path: 'user', children: [
      { path: 'login', component: LoginComponent},
      { path: 'logout', component: LogoutComponent},
      { path: 'register', component: RegisterComponent},
    ]},
  { path: 'rooms', children: [
      { path: 'create', component: RoomCreateComponent},
      { path: 'detail', component: RoomDetailComponent},
      { path: 'list', component: RoomsListComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
