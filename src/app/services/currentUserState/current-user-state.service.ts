import { Injectable, signal } from '@angular/core';

export interface CurrentUserState {
  id: string;
  username: string;
  email: string;
  token: string;
}



@Injectable({
  providedIn: 'root',
})
export class CurrentUserStateService {
  isLoggedIn = signal< true | false>(true);

  currentUser = signal<CurrentUserState | null>(null);

  constructor() {}
}
