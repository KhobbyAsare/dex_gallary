import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { cards } from './scroll-videos';

@Component({
  selector: 'app-cards-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-scroll.component.html',
  styleUrl: './cards-scroll.component.scss',
})
export class CardsScrollComponent {
  lazyLoadVideo(event: any) {
    const video = event.target;
    video.src = video.dataset.src;
    video.load();
    video.play();
  }
  @ViewChild('scrollingCard') scrollingCard!: ElementRef;
  cards: {
    content: string;
    src: string;
  }[] = [];

  isHovered: {
    index: number;
    isHovered: boolean;
  }[] = [];

  ngOnInit(): void {
    this.cards = cards;

    this.isHovered = this.cards.map((_, index) => ({
      index,
      isHovered: false,
    }));
  }

  ngAfterViewInit() {
    this.scrollingCard.nativeElement.addEventListener('mouseenter', () => {
      this.pauseScrolling();
    });
    this.scrollingCard.nativeElement.addEventListener('mouseleave', () => {
      this.resumeScrolling();
    });
  }

  pauseScrolling() {
    const cardContainer =
      this.scrollingCard.nativeElement.querySelector('.card-container');
    const computedStyle = getComputedStyle(cardContainer);
    const animationName = computedStyle.animationName;
    if (animationName !== 'none') {
      cardContainer.style.animationPlayState = 'paused';
    }
  }

  resumeScrolling() {
    const cardContainer =
      this.scrollingCard.nativeElement.querySelector('.card-container');
    const computedStyle = getComputedStyle(cardContainer);
    const animationName = computedStyle.animationName;
    if (animationName !== 'none') {
      cardContainer.style.animationPlayState = 'running';
    }
  }

  onHoverVideoCard(index: number) {
    this.isHovered = this.isHovered.map((card) => {
      if (card.index === index) {
        return {
          index,
          isHovered: true,
        };
      }
      return {
        index: card.index,
        isHovered: false,
      };
    });
  }

  onLeaveVideoCard(index: number) {
    this.isHovered = this.isHovered.map((card) => {
      if (card.index === index) {
        return {
          index,
          isHovered: false,
        };
      }
      return {
        index: card.index,
        isHovered: false,
      };
    });
  }
}
