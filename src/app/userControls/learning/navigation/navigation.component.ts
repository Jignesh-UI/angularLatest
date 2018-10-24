import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-navigation, [app-learning-navigation]',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public oneAtATime = false;

  constructor() { }

  ngOnInit() {
  }

}
