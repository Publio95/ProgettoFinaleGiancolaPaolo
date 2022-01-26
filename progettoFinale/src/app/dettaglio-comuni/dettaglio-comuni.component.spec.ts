import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioComuniComponent } from './dettaglio-comuni.component';

describe('DettaglioComuniComponent', () => {
  let component: DettaglioComuniComponent;
  let fixture: ComponentFixture<DettaglioComuniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioComuniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioComuniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
