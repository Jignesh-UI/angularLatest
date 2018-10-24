import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SharedModule } from './shared-module/shared-module.module';

import {AppComponent } from './app.component';
import {SiteHeaderComponent } from './common/site-header/site-header.component';
import {SiteFooterComponent } from './common/site-footer/site-footer.component';
import {TopNavComponent } from './common/top-nav/top-nav.component';
import {routes } from './route/route-routing.module';
import {LoginModule } from './login/login.module';
import {HomeModule } from './domains/home/home.module';
import {LoginService } from './login/login-service.service';
import {AuthGuard } from './login/authguard.guard';
import { LearningModule } from './domains/Learning/learning.module';
import { SiteLeftComponent } from './common/site-left/site-left.component';
import { RegistrationComponent } from './registration/registration.component';
import { LogComponent } from './test/log/log.component';
import { RegComponent } from './test/reg/reg.component';
import { LvmService } from './test/lvm.service';
import { HomeComponent } from './domains/home/home.component';

export const customElements = [ SiteHeaderComponent, SiteFooterComponent, SiteLeftComponent, TopNavComponent ];

@NgModule( {
declarations: [
    AppComponent, customElements, RegistrationComponent, LogComponent, RegComponent, HomeComponent
  ],
imports: [
    BrowserModule, CommonModule, FormsModule, ReactiveFormsModule,
    routes, SharedModule,
    LoginModule, HomeModule, LearningModule
  ],
  exports: [  ],
  providers: [ LoginService, AuthGuard, LvmService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
