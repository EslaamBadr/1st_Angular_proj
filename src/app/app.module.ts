import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './Components/users/users.component';
import { HeaderComponent } from './Components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { ApdateUserComponent } from './Components/apdate-user/apdate-user.component';
import { ErrorComponent } from './Components/error/error.component';
import { HttpClientModule } from '@angular/common/http'

let routs:Routes =[
  {path: '', component:UsersComponent},
  {path: 'users', component:UsersComponent},
  {path: 'users/:id', component:UserDetailsComponent},
  {path: 'add-user', component:AddUserComponent},
  // {path: 'update-user', component:ApdateUserComponent},
  {path:"update-user/:id",component:ApdateUserComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    UserDetailsComponent,
    AddUserComponent,
    ApdateUserComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routs),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [RouterModule]
})
export class AppModule { }
// export class AppRoutingModule { }
