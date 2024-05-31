import { Component, inject } from '@angular/core';
import { BrandNameSignalService } from '../../../services/brandNameSignal/brand-name-signal.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  public brandName = inject(BrandNameSignalService).brand_name();

  inputsCurrState: number = 1;

  setNewInputsState(val: number, e: Event) {
    e.preventDefault();
    this.inputsCurrState = val;
  }
}
