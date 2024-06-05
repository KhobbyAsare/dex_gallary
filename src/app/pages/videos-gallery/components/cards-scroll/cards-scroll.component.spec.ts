import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsScrollComponent } from './cards-scroll.component';

describe('CardsScrollComponent', () => {
  let component: CardsScrollComponent;
  let fixture: ComponentFixture<CardsScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
