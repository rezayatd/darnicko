import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtfolioContentComponent } from './protfolio-content.component';

describe('ProtfolioContentComponent', () => {
  let component: ProtfolioContentComponent;
  let fixture: ComponentFixture<ProtfolioContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtfolioContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtfolioContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
