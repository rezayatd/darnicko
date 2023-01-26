import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusWidgetComponent } from './contactus-widget.component';

describe('ContactusWidgetComponent', () => {
  let component: ContactusWidgetComponent;
  let fixture: ComponentFixture<ContactusWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
