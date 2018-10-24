import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-site-header, [app-site-header]',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  @Input() title;
  @Input() pageTitle;

  constructor() { }

  ngOnInit() {
  }

}
