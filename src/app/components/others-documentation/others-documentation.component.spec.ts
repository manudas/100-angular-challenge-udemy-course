import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersDocumentationComponent } from './others-documentation.component';

describe('OthersDocumentationComponent', () => {
  let component: OthersDocumentationComponent;
  let fixture: ComponentFixture<OthersDocumentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OthersDocumentationComponent]
    });
    fixture = TestBed.createComponent(OthersDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
