import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabComuniComponent } from './tab-comuni.component';

describe('TabComuniComponent', () => {
  let component: TabComuniComponent;
  let fixture: ComponentFixture<TabComuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabComuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
