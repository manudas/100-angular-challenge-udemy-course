import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDocumentationComponent } from './services-documentation.component';

describe('ServicesDocumentationComponent', () => {
  let component: ServicesDocumentationComponent;
  let fixture: ComponentFixture<ServicesDocumentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesDocumentationComponent]
    });
    fixture = TestBed.createComponent(ServicesDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
