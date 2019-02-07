import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettings7Component } from './account-settings7.component';

describe('AccountSettings7Component', () => {
  let component: AccountSettings7Component;
  let fixture: ComponentFixture<AccountSettings7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettings7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettings7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
