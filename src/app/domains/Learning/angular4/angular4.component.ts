import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular4',
  templateUrl: './angular4.component.html',
  styleUrls: ['./angular4.component.css']
})
export class Angular4Component implements OnInit {
  isFirstOpen = true;
  oneAtATime = true;
  closeOthers = true;

  constructor() { }

  ngOnInit() {
  }

}
