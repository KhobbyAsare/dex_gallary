import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrandNameSignalService } from '../../services/brandNameSignal/brand-name-signal.service';
import { InteractiveNavigatioBarComponent } from '../../components/interactive-navigatio-bar/interactive-navigatio-bar.component';
import { CardsComponent } from "./components/cards/cards.component";

@Component({
    selector: 'app-gallery',
    standalone: true,
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
    imports: [CommonModule, FormsModule, InteractiveNavigatioBarComponent, CardsComponent]
})
export class GalleryComponent {
  public brandName = inject(BrandNameSignalService).brand_name();

  searchQuery: string = '';

  tagsValues(tag:string){
    this.searchQuery = tag
  }
}
