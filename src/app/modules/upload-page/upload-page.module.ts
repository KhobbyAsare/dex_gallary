import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../../pages/landing-page/landing-page.component';
import { UploadImageComponent } from '../../pages/uploads/upload-image/upload-image.component';
import { UploadVideoComponent } from '../../pages/uploads/upload-video/upload-video.component';


const routes: Routes = [
  {
    path: 'image',
    component: UploadImageComponent,
  },
  {
    path: 'video',
    component: UploadVideoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule],
  exports: [],
})
export class UploadPageModule {}
