import { Component, HostListener, inject } from '@angular/core';
import { BrandNameSignalService } from '../../../../services/brandNameSignal/brand-name-signal.service';
import { RouterModule } from '@angular/router';
import { NavigationBarProfileComponent } from '../../../../components/User-profileIcon/user-ProfileIcon';

@Component({
  selector: 'app-profile-page-navigation-bar',
  standalone: true,
  templateUrl: './profile-page-navigation-bar.component.html',
  styleUrl: './profile-page-navigation-bar.component.scss',
  imports: [RouterModule, NavigationBarProfileComponent],
})
export class ProfilePageNavigationBarComponent {
  public brandName = inject(BrandNameSignalService).brand_name();
}
