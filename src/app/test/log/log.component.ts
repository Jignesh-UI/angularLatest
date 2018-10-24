import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LvmService } from '../lvm.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  loginForm: FormGroup;

  formErrors;

  constructor(public messageService: LvmService) {
    this.formErrors = messageService.formErrors;
  }

  ngOnInit() {
    this.formCreateReset();
    this.loginForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.loginForm);
    });
  }

  logValidationErrors(group: FormGroup = this.loginForm): void {
    this.loginForm =  this.messageService.logErrors(this.loginForm);
  }

  onLoadDataClick(): void {
    this.formErrors = '';
    this.formCreateReset();
  }

  submitMethod(): void {
    localStorage.setItem('userData', JSON.stringify(this.loginForm.getRawValue()));
  }

  formCreateReset(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(12)]),
      password: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(12)  ])
    });
  }
}
