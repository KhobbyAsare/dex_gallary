import { Component, OnInit, inject } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrandNameSignalService } from '../../services/brandNameSignal/brand-name-signal.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  imports: [SignInComponent],
})
export class AuthComponent {
  public brandName = inject(BrandNameSignalService).brand_name();

  currentComponet: 'signin' | 'signup' = 'signin';

  changeCurrentComponent(comp: 'signin' | 'signup') {
    this.currentComponet = comp;
  }
}
