import { Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
];
