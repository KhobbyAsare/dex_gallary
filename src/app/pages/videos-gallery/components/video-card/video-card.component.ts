import { TitleCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
})
export class VideoCardComponent {
  isVideoPlaying = false;
  currentVideoForPreview = output<string>();
  isPreviewing = output<boolean>();

  video = input<{
    thumbnail: string;
    src: string;
    title: string;
    views: number;
    description: string;
  }>();

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  getPreviewVideo(src: string | undefined) {
    if (src) {
      this.currentVideoForPreview.emit(src);
      this.isPreviewing.emit(true);
    }
  }
}
