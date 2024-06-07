import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { BrandNameSignalService } from '../../../../services/brandNameSignal/brand-name-signal.service';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServiceComponent {
  public brandName = inject(BrandNameSignalService).brand_name();

  lazyLoadVideo(event: any) {
    const video = event.target;
    video.src = video.dataset.src;
    video.load();
    video.play();
  }
}
