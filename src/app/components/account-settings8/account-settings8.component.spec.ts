import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettings8Component } from './account-settings8.component';

describe('AccountSettings8Component', () => {
  let component: AccountSettings8Component;
  let fixture: ComponentFixture<AccountSettings8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettings8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettings8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
