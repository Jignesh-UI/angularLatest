import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AccordionModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ValidationMessagesService } from '../userControls/common/validation-messages.service';


@NgModule({
  imports: [ AccordionModule, AccordionModule.forRoot(),
    ModalModule.forRoot(), NgxPaginationModule
  ],
  declarations: [

  ],
  exports: [
    AccordionModule,
    ModalModule
  ],
  providers: [ValidationMessagesService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
