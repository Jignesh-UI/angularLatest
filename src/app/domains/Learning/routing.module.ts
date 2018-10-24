import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../login/authguard.guard';
import { Angular4Component } from './angular4/angular4.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { Css3Component } from './css3/css3.component';
import { Html5Component } from './html5/html5.component';
import { NodeComponent } from './node/node.component';
import { SassComponent } from './sass/sass.component';
import { LearningComponent } from './learning-component.component';

const learningroutes: Routes = [
  {
    path: 'learning', component: LearningComponent, children: [ // , canActivate: [AuthGuard]
      { path: 'angular4', component: Angular4Component },
      { path: 'bootstrap', component: BootstrapComponent },
      { path: 'css3', component: Css3Component },
      { path: 'html5', component: Html5Component },
      { path: 'node', component: NodeComponent },
      { path: 'sass', component: SassComponent},
      { path: '', redirectTo: 'angular4', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(learningroutes)],
  exports: [RouterModule]
})

export class LearningRoutingModule { }

export const learningRoutedComponent = [
  Angular4Component,
  BootstrapComponent,
  Css3Component,
  Html5Component,
  NodeComponent,
  SassComponent
];
