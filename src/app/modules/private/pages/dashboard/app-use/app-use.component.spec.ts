import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUseComponent } from './app-use.component';

describe('AccessRecordComponent', () => {
  let component: AppUseComponent;
  let fixture: ComponentFixture<AppUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
