import { TestBed } from '@angular/core/testing';

import { CurrentUserProfileImageService } from './current-user-profile-image.service';

describe('CurrentUserProfileImageService', () => {
  let service: CurrentUserProfileImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentUserProfileImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
