import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabClientiComponent } from './tab-clienti.component';

describe('TabClientiComponent', () => {
  let component: TabClientiComponent;
  let fixture: ComponentFixture<TabClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabClientiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
