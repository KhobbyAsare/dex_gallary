import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonBtnsComponent } from './botton-btns.component';

describe('BottonBtnsComponent', () => {
  let component: BottonBtnsComponent;
  let fixture: ComponentFixture<BottonBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottonBtnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottonBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
