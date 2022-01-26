import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFattureComponent } from './tab-fatture.component';

describe('TabFattureComponent', () => {
  let component: TabFattureComponent;
  let fixture: ComponentFixture<TabFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
