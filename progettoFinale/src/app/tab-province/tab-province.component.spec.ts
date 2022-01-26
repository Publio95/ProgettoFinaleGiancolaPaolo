import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProvinceComponent } from './tab-province.component';

describe('TabProvinceComponent', () => {
  let component: TabProvinceComponent;
  let fixture: ComponentFixture<TabProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabProvinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
