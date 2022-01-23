import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfojuegosdemesaComponent } from './infojuegosdemesa.component';

describe('InfojuegosdemesaComponent', () => {
  let component: InfojuegosdemesaComponent;
  let fixture: ComponentFixture<InfojuegosdemesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfojuegosdemesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfojuegosdemesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
