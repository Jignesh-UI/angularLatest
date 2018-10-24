import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule} from '../../shared-module/shared-module.module';
import { Angular4Component } from './angular4/angular4.component';
import { SassComponent } from './sass/sass.component';
import { Html5Component } from './html5/html5.component';
import { Css3Component } from './css3/css3.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { NodeComponent } from './node/node.component';
import { LearningComponent } from './learning-component.component';
import { NavigationComponent } from '../../userControls/learning/navigation/navigation.component';
import { LearningRoutingModule, learningRoutedComponent } from './routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



@NgModule({
  imports: [
    CommonModule, SharedModule, LearningRoutingModule, FormsModule, ReactiveFormsModule, HttpModule
    // ,AccordionModule
  ],
  declarations: [
    LearningComponent, NavigationComponent, learningRoutedComponent,
    Angular4Component, SassComponent, Html5Component,
    Css3Component, BootstrapComponent, NodeComponent
  ],
  providers: [],
})
export class LearningModule { }
