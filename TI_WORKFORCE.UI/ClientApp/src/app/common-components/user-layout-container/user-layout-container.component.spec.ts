import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLayoutContainerComponent } from './user-layout-container.component';

describe('UserLayoutContainerComponent', () => {
  let component: UserLayoutContainerComponent;
  let fixture: ComponentFixture<UserLayoutContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLayoutContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
