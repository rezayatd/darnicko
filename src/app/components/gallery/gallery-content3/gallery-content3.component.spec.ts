import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryContent3Component } from './gallery-content3.component';

describe('GalleryContent3Component', () => {
  let component: GalleryContent3Component;
  let fixture: ComponentFixture<GalleryContent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryContent3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryContent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
