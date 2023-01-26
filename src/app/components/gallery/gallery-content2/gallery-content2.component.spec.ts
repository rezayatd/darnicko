import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryContent2Component } from './gallery-content2.component';

describe('GalleryContent2Component', () => {
  let component: GalleryContent2Component;
  let fixture: ComponentFixture<GalleryContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryContent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
