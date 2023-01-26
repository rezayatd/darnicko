import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryContent1Component } from './gallery-content1.component';

describe('GalleryContent1Component', () => {
  let component: GalleryContent1Component;
  let fixture: ComponentFixture<GalleryContent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryContent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryContent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
