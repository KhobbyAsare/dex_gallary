import { Component, OnInit, inject } from '@angular/core';
import { ProfilePageNavigationBarComponent } from './components/profile-page-navigation-bar/profile-page-navigation-bar.component';
import { CurrentUserProfileImageService } from '../../services/CurrentUser-ProfileImage/current-user-profile-image.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  imports: [ProfilePageNavigationBarComponent],
})
export class UserProfileComponent {
  public userProfile = inject(CurrentUserProfileImageService);

  user: {
    name: string;
    email: string;
    link: string;
    profileImage: string | ArrayBuffer | null;
    techSpace: string;
  } = {
    name: 'Johnson Smith Kelvin',
    email: 'johnson@gmail.com',
    link: 'https://www.linkedin.com/in/johnson-smith-kelvin',
    profileImage: this.userProfile.userProfileImage(),
    techSpace: 'Frontend Developer',
  };

  selectedFile: File | null = null;
  public tags: string[] = [];
  isTagInput: boolean = false;

  // data collected

  imageUrl: string | ArrayBuffer | null = '';

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0]; // Add null check here
    this.selectedFile = file ?? null; // Add null check here

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => (this.imageUrl = reader.result);
      reader.readAsDataURL(file);
    }
  }
}
