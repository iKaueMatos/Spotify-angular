import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutes } from './login.routing';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutes
  ]
})
export class LoginModule { }
