import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../domains/home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { RegComponent } from '../test/reg/reg.component';
import { LogComponent } from '../test/log/log.component';
import { ForgotPasswordComponent } from '../login/forgot-password/forgot-password.component';

export const router: Routes = [
  { path: 'home', component: HomeComponent }, // , canActivate: [AuthGuard]
  // { path: 'reports', component: ReportsComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'login', component: LoginComponent},
  { path: 'log', component: LogComponent},
  { path: 'reg', component: RegComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
