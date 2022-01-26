import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNuovoComponent } from './add-nuovo.component';

describe('AddNuovoComponent', () => {
  let component: AddNuovoComponent;
  let fixture: ComponentFixture<AddNuovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNuovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNuovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
