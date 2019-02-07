import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettings6Component } from './account-settings6.component';

describe('AccountSettings6Component', () => {
  let component: AccountSettings6Component;
  let fixture: ComponentFixture<AccountSettings6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettings6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettings6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
