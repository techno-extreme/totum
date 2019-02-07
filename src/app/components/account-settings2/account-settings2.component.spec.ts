import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettings2Component } from './account-settings2.component';

describe('AccountSettings2Component', () => {
  let component: AccountSettings2Component;
  let fixture: ComponentFixture<AccountSettings2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettings2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettings2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
