import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CurrentUserStateService } from '../services/currentUserState/current-user-state.service';



export const authGuardGuard: CanActivateFn = (route, state) => {
  const currentUserStateService = inject(CurrentUserStateService);
  const router = inject(Router);

  if (currentUserStateService.isLoggedIn()) {
    return true;
  }
 
   router.navigate(['/']);
  return false;
};
