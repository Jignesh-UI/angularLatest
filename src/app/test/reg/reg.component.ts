import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})

export class RegComponent implements OnInit {
  registrationForm: FormGroup;

  validationMessages = {
    'firstName': {
      'required': 'First name is required.',
      'minlength': 'Minimum 2 characters are required.'
    },
    'lastName': {
      'required': 'Last name is required.',
      'minlength': 'Minimum 2 characters are required.'
    },
    'skillName': {
      'required': 'Skill is required.'
    },
    'experienceInYears': {
      'required': 'Skill is required.'
    },
    'proficiency': {
      'required': 'Skill is required.'
    },
    'mobileNo': {
      'required': 'Mobile Number is required.'
    },
    'email': {
      'required': 'Email is required.'
    },
    'address': {
      'required': 'Address is required.'
    },
    'streetAddress': {
      'required': 'Street Address is required.'
    },
    'city': {
      'required': 'City is required.'
    },
    'state': {
      'required': 'State is required.'
    },
    'pinCode': {
      'required': 'Pin Code is required.'
    }
  };

  formErrors = {
    'firstName': '',
    'lastName': '',
    'skillName': '',
    'experienceInYears': '',
    'proficiency': '',
    'mobileNo': '',
    'email': '',
    'address': '',
    'streetAddress': '',
    'city': '',
    'state': '',
    'pinCode': ''
  };

  constructor() {
  }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      skills: new FormGroup({
        skillName: new FormControl('', [Validators.required]),
        experienceInYears: new FormControl(),
        proficiency: new FormControl('', [Validators.required])
      }),
      contactDetails: new FormGroup({
        mobileNo: new FormControl('', [Validators.required]),
        phoneNo: new FormControl(),
        email: new FormControl('', [Validators.required]),
        website: new FormControl()
      }),
      addressDetails: new FormGroup({
        address: new FormControl('', [Validators.required]),
        streetAddress: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        pinCode: new FormControl('', [Validators.required]),
        country: new FormControl('')
      })
    });
    this.registrationForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.registrationForm);
    });
    // this.registrationForm.controls.lastName.setValue('Patel');
  }

  logValidationErrors(group: FormGroup = this.registrationForm): void {
    Object.keys(group.controls).forEach((key: string) => {

      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid &&
          (abstractControl.touched || abstractControl.dirty)) {
          // && (abstractControl.touched || abstractControl.dirty)
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + '';
            }
          }
        }
        // console.log( 'Key = ' + key + 'Value = ' + abstractControl.value);
        // abstractControl.disable(); Disable all form controls.
      }
    });
     // console.log(Object.keys(group.controls));
  }



  // logKeyValuePairs(group: FormGroup): void {
  //   Object.keys(group.controls).forEach((key: string) => {
  //     const abstractControl = group.get(key);
  //     if (abstractControl instanceof FormGroup) {
  //       this.logKeyValuePairs(abstractControl);
  //     } else {
  //       // console.log( 'Key = ' + key + 'Value = ' + abstractControl.value);
  //       // abstractControl.disable(); Disable all form controls.
  //     }
  //   });
  //    console.log(Object.keys(group.controls));
  // }

  onLoadDataClick(): void {
    // console.log(localStorage.getItem('currentUser'));
    // this.logValidationErrors(this.registrationForm);
    this.registrationForm.reset();
    console.log(this.formErrors);
  }

  submitMethod(): void {
    console.log(this.registrationForm.controls);
    // console.log(this.registrationForm.controls.firstName);
  }

}





