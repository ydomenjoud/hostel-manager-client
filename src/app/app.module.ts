import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCredentialsComponent } from './user-credentials/user-credentials.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RoomCreateComponent } from './rooms/room-create/room-create.component';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { RoomDetailComponent } from './rooms/room-detail/room-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCredentialsComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    RoomCreateComponent,
    RoomsListComponent,
    RoomDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
