import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageNavigationBarComponent } from './profile-page-navigation-bar.component';

describe('ProfilePageNavigationBarComponent', () => {
  let component: ProfilePageNavigationBarComponent;
  let fixture: ComponentFixture<ProfilePageNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePageNavigationBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilePageNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
