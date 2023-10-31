import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderCircularComponentComponent } from './loader-circular.component';

describe('LoaderCircularComponentComponent', () => {
  let component: LoaderCircularComponentComponent;
  let fixture: ComponentFixture<LoaderCircularComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderCircularComponentComponent]
    });
    fixture = TestBed.createComponent(LoaderCircularComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
