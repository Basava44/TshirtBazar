import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenSectionComponent } from './women-section.component';

describe('WomenSectionComponent', () => {
  let component: WomenSectionComponent;
  let fixture: ComponentFixture<WomenSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
