import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationMessagesService } from '../userControls/common/validation-messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  formErrors;
  employeeForm: FormGroup;
  formValidationStatus = true;

  constructor(private valMessage: ValidationMessagesService, private router: Router) {
    this.formErrors = valMessage.formErrors;
  }

  ngOnInit() {
    this.formCreateReset();
    this.employeeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors();
    });

    this.employeeForm.get('contactPreference').valueChanges
    .subscribe((data: string) => {
      this.onContactPreferenceChanges(data);
    });
  }

  logValidationErrors(): void {
    this.employeeForm = this.valMessage.logFocusErrors(this.employeeForm);
  }

  loadData(): void {
    // this.employeeForm.setValue({
    //   firstName: 'Jignesh',
    //   lastName: 'Patel',
    //   email: 'jigneshpat@hotmail.com',
    //   gender: 'Male',
    //   contact: {
    //     mobileNo: '9016354596',
    //     homeNo: '07927410161'
    //   },
    //   address: {
    //     streetAddress: 'Surya Apartment',
    //     city: 'Ahmedabad',
    //     state: 'Gujarat',
    //     zipcode: '380063'
    //   },
    //   skills: {
    //     skillName: 'Angular 4',
    //     experienceInYears: 5,
    //     proficiency: 'Beginner'
    //   }
    // });
  }

  loadNameEmailData(): void {
    // this.employeeForm.patchValue({
    //   firstName: 'Jignesh',
    //   lastName: 'Patel',
    //   email: 'jigneshpat@hotmail.com',
    //   gender: 'Male',
    //   contact: {
    //     mobileNo: '9016354596',
    //     homeNo: '07927410161'
    //   }
    // });
  }

  submitForm(): void {
    this.employeeForm = this.valMessage.logFormErrors(this.employeeForm);

    if (this.employeeForm.valid) {
      localStorage.setItem('empData', JSON.stringify(this.employeeForm.value));
      this.router.navigate(['login']);
      this.formValidationStatus = true;
    } else {
      this.formValidationStatus = false;
      console.log(this.employeeForm.invalid);
      console.log(this.formErrors);
    }
  }

  onContactPreferenceChanges(selectedValue: string): void {
    const phoneControl = this.employeeForm.get('mobileNo');
    const emailControl = this.employeeForm.get('email');
    if (selectedValue === 'mobileNo') {
      phoneControl.setValidators([Validators.required, this.valMessage.validateNumber]);
      emailControl.clearValidators();
    } else {
      emailControl.setValidators([Validators.required, this.valMessage.emailDomain]);
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
    emailControl.updateValueAndValidity();
  }

  formCreateReset(): void {
    this.employeeForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(14),
        this.valMessage.validateOnlyString]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(14),
        this.valMessage.validateOnlyString]),
      contactPreference: new FormControl('email'),
      email: new FormControl('', [ Validators.required, this.valMessage.emailDomain]),
      gender: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', this.valMessage.validateNumber),
      contact: new FormGroup({
        homeNo: new FormControl('', this.valMessage.validateNumber)
      }),
      address: new FormGroup({
        streetAddress: new FormControl('', [ Validators.required ]),
        city: new FormControl('', [ Validators.required ]),
        state: new FormControl('', [ Validators.required ]),
        zipcode: new FormControl('', [ Validators.required, this.valMessage.validateNumber ])
      }),
      skills: new FormGroup({
        skillName: new FormControl('', [ Validators.required ]),
        experienceInYears: new FormControl('', this.valMessage.validateNumber),
        proficiency: new FormControl('', [ Validators.required ])
      })
    });
  }

}
