import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesDocumentationComponent } from './pipes-documentation.component';

describe('PipesDocumentationComponent', () => {
  let component: PipesDocumentationComponent;
  let fixture: ComponentFixture<PipesDocumentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesDocumentationComponent]
    });
    fixture = TestBed.createComponent(PipesDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
