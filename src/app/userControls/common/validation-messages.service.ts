import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Injectable()
export class ValidationMessagesService {

  validationMessage = {
    'firstName': {
      'required': 'First name is required.',
      'minlength': 'Minimum 2 characters are required.',
      'maxlength': 'Maximum 14 characters are allowed.'
    },
    'lastName': {
      'required': 'Last name is required.',
      'minlength': 'Minimum 2 characters are required.',
      'maxlength': 'Maximum 14 characters are allowed.'
    },
    'skillName': {
      'required' : 'Skill is Required.'
    },
    'experienceInYears': {
      'required' : 'Experience in Year is Required',
      'invalidNumber': 'Only Numbers are required.'
    },
    'proficiency': {
      'required' : 'Proficience is Required.'
    },
    'streetAddress': {
      'required' : 'Street Address is Required.'
    },
    'city': {
      'required' : 'City is Required.'
    },
    'state': {
      'required' : 'State is Required.'
    },
    'zipcode': {
      'required' : 'Zip Code is Required.',
      'invalidNumber': 'Only Numbers are required.'
    },
    'mobileNo': {
      'required' : 'Mobile Number is Required.',
      'invalidNumber': 'Only Numbers are required.'
    },
    'homeNo': {
      'required' : 'Phone Number is Required.',
      'invalidNumber': 'Only Numbers are required.'
    },
    'email': {
      'required' : 'Email is Required.',
      'emailDomain': 'Email Domain Must be @gmail.com'
    },
    'gender': {
      'required' : 'Gender is required.'
    },
    'userName': {
      'required': 'User Name is required.',
      'minlength': 'Minimum 2 characters are required.',
      'maxlength': 'Maximum 12 characters are allowed.',
      'stringOnly': 'Only String is allowed.'
    },
    'password': {
      'required': 'Password is required.',
      'minlength': 'Minimum 2 characters are required.',
      'maxlength': 'Maximum 12 characters are allowed.'
    }
};

  formErrors = {
    'firstName': '',
    'lastName': '',
    'skillName': '',
    'experienceInYears': '',
    'proficiency': '',
    'streetAddress': '',
    'city': '',
    'state': '',
    'zipcode': '',
    'mobileNo': '',
    'homeNo': '',
    'email': '',
    'gender': '',
    'userName': '',
    'password': ''
  };
  constructor() { }

  clearFormErrors(form, validateMessageService): any {
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

  logFormErrors(group: FormGroup): any {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logFormErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid ) {
          // && (abstractControl.touched || abstractControl.dirty)
          const messages = this.validationMessage[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey];
            }
          }
        }
      }
    });
    return group;
  }

  logFocusErrors(group: FormGroup): any {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logFocusErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessage[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey];
            }
          }
        }
      }
    });
    return group;
  }

   emailDomain(control: AbstractControl): { [key: string]: any } | null {
    const email: string = control.value;
    const domail = email.substring(email.lastIndexOf('@') + 1 );
    if (email === '' || domail.toLowerCase() === 'gmail.com') {
      return null;
    } else {
      return {'emailDomain': true };
    }
  }

  validateNumber(control: AbstractControl): { [key: string]: any } | null {
    const num = control.value;
    if (num === null || num === '') {
      return null;
    }
    if (!num.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) {
      return { 'invalidNumber': true };
    }
    return null;
  }

  validateOnlyString(control: AbstractControl): {[key: string]: any} | null {
    const str = control.value;
    const reg = /^[a-zA-Z]+$/;
    if (!reg.test(str.toString())) {
      return {'stringOnly': true};
    }
    return null;
  }

}
