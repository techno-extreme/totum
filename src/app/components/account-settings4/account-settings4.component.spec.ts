import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettings4Component } from './account-settings4.component';

describe('AccountSettings4Component', () => {
  let component: AccountSettings4Component;
  let fixture: ComponentFixture<AccountSettings4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettings4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettings4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
