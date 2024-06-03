import { Component, OnInit, inject } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrandNameSignalService } from '../../services/brandNameSignal/brand-name-signal.service';
import { RouterModule } from '@angular/router';
import { SignupComponent } from "./signup/signup.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  imports: [SignInComponent, RouterModule, SignupComponent],
})
export class AuthComponent {
  public brandName = inject(BrandNameSignalService).brand_name();

  headerText: {
    header: string;
    pText: string;
  }[] = [
    {
      header: 'Welcome Back',
      pText:
        'Great to see you again! Please sign in to continue where you left off.',
    },
    {
      header: 'Create an Account',
      pText:
        'Join our vibrant community and unlock exclusive benefits. Sign up now!',
    },
  ];

  currentComponet: 'signin' | 'signup' = 'signin';

  changeCurrentComponent(comp: 'signin' | 'signup') {
    this.currentComponet = comp;
  }
}
