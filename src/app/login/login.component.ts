import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationMessagesService } from '../userControls/common/validation-messages.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formError;
  loginForm: FormGroup;

  constructor(private valMessage: ValidationMessagesService, private route: Router) {
    this.formError = valMessage.formErrors;
   }

  ngOnInit() {
    this.formCreateReset();
    this.loginForm.valueChanges.subscribe(() => {
      this.validateForm();
    });
  }

  validateForm(): void {
    this.loginForm = this.valMessage.logFocusErrors(this.loginForm);
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const usr = JSON.parse(localStorage.getItem('empData'));
      if ((usr.firstName === this.loginForm.controls.userName.value) &&
          (usr.firstName === this.loginForm.controls.password.value)) {
        this.route.navigate(['learning/angular4']);
      }
    } else {
      this.loginForm = this.valMessage.logFormErrors(this.loginForm);
    }
  }

  formCreateReset(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(2),
        this.valMessage.validateOnlyString, Validators.maxLength(12)]),
      password: new FormControl('', [Validators.required, Validators.minLength(2),
        this.valMessage.validateOnlyString, Validators.maxLength(12)])
    });
  }

}
