import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsWidgetComponent } from './promotions-widget.component';

describe('PromotionsWidgetComponent', () => {
  let component: PromotionsWidgetComponent;
  let fixture: ComponentFixture<PromotionsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
