import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettings3Component } from './account-settings3.component';

describe('AccountSettings3Component', () => {
  let component: AccountSettings3Component;
  let fixture: ComponentFixture<AccountSettings3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettings3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettings3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
