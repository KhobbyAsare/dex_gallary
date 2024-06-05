import { Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AuthComponent } from './pages/auth/auth.component';
import { UploadImageComponent } from './pages/uploads/upload-image/upload-image.component';
import { VideosGalleryComponent } from './pages/videos-gallery/videos-gallery.component';

export const routes: Routes = [
  {
    path: '',
    // loadChildren: () =>
    //   import('./modules/main-module/main-module.module').then(
    //     (m) => m.MainModuleModule
    //   ),
    component: LandingPageComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'videos',
    component: VideosGalleryComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'upload-image',
    component: UploadImageComponent,
  },
];
