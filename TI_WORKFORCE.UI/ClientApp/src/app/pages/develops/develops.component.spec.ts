import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopsComponent } from './develops.component';

describe('DevelopsComponent', () => {
  let component: DevelopsComponent;
  let fixture: ComponentFixture<DevelopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
