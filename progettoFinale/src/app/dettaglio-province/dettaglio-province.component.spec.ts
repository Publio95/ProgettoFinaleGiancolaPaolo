import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioProvinceComponent } from './dettaglio-province.component';

describe('DettaglioProvinceComponent', () => {
  let component: DettaglioProvinceComponent;
  let fixture: ComponentFixture<DettaglioProvinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioProvinceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
