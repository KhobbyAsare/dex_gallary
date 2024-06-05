import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss',
})
export class VideoCardComponent {
  video = input<{
    thumbnail: string;
    src: string;
    title: string;
    views: number;
    description: string;
  }>();
}
