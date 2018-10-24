import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLeftComponent } from './site-left.component';

describe('SiteLeftComponent', () => {
  let component: SiteLeftComponent;
  let fixture: ComponentFixture<SiteLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
