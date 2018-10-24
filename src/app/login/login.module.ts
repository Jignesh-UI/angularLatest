import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  declarations: [LoginComponent, ForgotPasswordComponent]
})
export class LoginModule { }
