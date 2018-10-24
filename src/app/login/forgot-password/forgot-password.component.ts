import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  employeeData;
  constructor() { }

  ngOnInit() {
    this.employeeData = JSON.parse(localStorage.getItem('empData'));
    console.log(this.employeeData);
  }

}
