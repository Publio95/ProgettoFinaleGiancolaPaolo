import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailfatture2Component } from './detailfatture2.component';

describe('Detailfatture2Component', () => {
  let component: Detailfatture2Component;
  let fixture: ComponentFixture<Detailfatture2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Detailfatture2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Detailfatture2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
