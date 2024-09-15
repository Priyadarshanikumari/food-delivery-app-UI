import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroMenuComponent } from './restro-menu.component';

describe('RestroMenuComponent', () => {
  let component: RestroMenuComponent;
  let fixture: ComponentFixture<RestroMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestroMenuComponent]
    });
    fixture = TestBed.createComponent(RestroMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
