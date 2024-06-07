import { Component, OnInit, inject } from '@angular/core';
import { InteractiveNavigatioBarComponent } from '../../components/interactive-navigatio-bar/interactive-navigatio-bar.component';
import { BrandNameSignalService } from '../../services/brandNameSignal/brand-name-signal.service';
import { TagsService } from '../../services/tags/tags.service';
import { FormsModule } from '@angular/forms';
import { AutoScrollComponent } from '../../components/auto-scroll/auto-scroll.component';
import { CardsScrollComponent } from './components/cards-scroll/cards-scroll.component';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { videoList } from './card-videos';

@Component({
  selector: 'app-videos-gallery',
  standalone: true,
  templateUrl: './videos-gallery.component.html',
  styleUrl: './videos-gallery.component.scss',
  imports: [
    InteractiveNavigatioBarComponent,
    FormsModule,
    CommonModule,
    AutoScrollComponent,
    CardsScrollComponent,
    VideoCardComponent,
  ],
})
export class VideosGalleryComponent implements OnInit {
  public brandName = inject(BrandNameSignalService).brand_name();
  public tags = inject(TagsService).tags;
  searchQuery: string = '';
  isPreview = false;
  previewingVideo = '';

  cardVideo: {
    description: string;
    thumbnail: string;
    src: string;
    title: string;
    views: number;
  }[] = [];

  ngOnInit() {
    this.cardVideo = videoList;
  }

  tagsValues(tag: string) {
    this.searchQuery = tag.toLowerCase();
  }

  getPreviewVideo(src: string) {
    this.previewingVideo = src;
    console.log(this.previewingVideo);
  }

  getPreviewStatus(status: boolean) {
    this.isPreview = status;
  }
}
