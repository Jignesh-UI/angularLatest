import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class LvmService {

  constructor() { }

  validationMessages = {
    'userName': {
      'required': 'First name is required.',
      'minlength': 'Minimum 2 characters are required.',
      'maxlength': 'Maximum 12 characters are allowed.'
    },
    'password': {
      'required': 'Last name is required.',
      'minlength': 'Minimum 2 characters are required.',
      'maxlength': 'Maximum 12 characters are allowed.'
    },
    'firstName': {
      'required': 'First name is required.',
      'minlength': 'Minimum 2 characters are required.'
    },
    'lastName': {
      'required': 'Last name is required.',
      'minlength': 'Minimum 2 characters are required.'
    }
  };

  formErrors = {
    'userName': '',
    'password': '',
    'firstName': '',
    'lastName': ''
  };

  clearFormErrors(form, validateMessageService): void {
    Object.keys(form.controls).forEach((key: string) => {
      const abstractControl = form.get(key);
      if (abstractControl instanceof FormGroup) {
        this.clearFormErrors(abstractControl, validateMessageService);
      } else {
        validateMessageService.formErrors[key] = '';
        abstractControl.reset();
      }
    });
  }


  logErrors(group: FormGroup): any {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid
          && (abstractControl.touched || abstractControl.dirty)
          ) {
          // && (abstractControl.touched || abstractControl.dirty)
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + '';
            }
          }
        }
      }
    });
    return group;
  }
}
