import { Component, inject } from '@angular/core';
import { BrandNameSignalService } from '../../../services/brandNameSignal/brand-name-signal.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  public brandName = inject(BrandNameSignalService).brand_name();
}
