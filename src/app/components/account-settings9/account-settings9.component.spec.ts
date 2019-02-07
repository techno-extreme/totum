import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettings9Component } from './account-settings9.component';

describe('AccountSettings9Component', () => {
  let component: AccountSettings9Component;
  let fixture: ComponentFixture<AccountSettings9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettings9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettings9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
