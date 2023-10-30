import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesDocumentationComponent } from './directives-documentation.component';

describe('DirectivesDocumentationComponent', () => {
  let component: DirectivesDocumentationComponent;
  let fixture: ComponentFixture<DirectivesDocumentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectivesDocumentationComponent]
    });
    fixture = TestBed.createComponent(DirectivesDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
