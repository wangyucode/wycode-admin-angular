import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorStatistComponent } from './error-statist.component';

describe('ErrorStatistComponent', () => {
  let component: ErrorStatistComponent;
  let fixture: ComponentFixture<ErrorStatistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorStatistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorStatistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
