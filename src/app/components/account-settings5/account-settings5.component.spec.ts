import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSettings5Component } from './account-settings5.component';

describe('AccountSettings5Component', () => {
  let component: AccountSettings5Component;
  let fixture: ComponentFixture<AccountSettings5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSettings5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSettings5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
