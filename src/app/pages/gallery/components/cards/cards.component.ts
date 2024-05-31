import { HttpClient } from '@angular/common/http';
import { Component, OnInit, SimpleChanges, inject, input } from '@angular/core';
import { imageArray } from './images';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements OnInit {
  private http = inject(HttpClient);
  searchQuery = input<string>();
  cards = [1, 2, 3, 4, 5, 5, 45, 45, 454, 45, 2, 3, 4, 5, 5, 45, 45, 454, 45];

  imageArray: {
    id: number;
    src: string;
    filename: string;
  }[] = [];

  ngOnInit(): void {
    this.imageArray = imageArray;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['searchQuery']) {
      this.filterData();
    }
  }

  filterData() {
    if (this.searchQuery()) {
      this.imageArray = imageArray.filter((img) =>
        img.filename.includes(this.searchQuery() as string)
      );

      return;
    }

    this.imageArray = imageArray;
  }

  downloadImage(img: string, filename: string): void {
    this.http.get(img, { responseType: 'blob' }).subscribe((blob) => {
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url); // Clean up the URL object
    });
  }
}
