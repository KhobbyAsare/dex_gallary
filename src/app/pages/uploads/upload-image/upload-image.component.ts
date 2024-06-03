import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { BrandNameSignalService } from '../../../services/brandNameSignal/brand-name-signal.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsService } from '../../../services/tags/tags.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, TitleCasePipe, RouterModule],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss',
})
export class UploadImageComponent implements OnInit {
  public brandName = inject(BrandNameSignalService).brand_name();
  private generaltags = inject(TagsService).tags;
  selectedFile: File | null = null;
  public tags: string[] = [];
  isTagInput: boolean = false;

  // data collected
  selectedTags: string[] = [];
  fileName: string = '';
  imageUrl: string | ArrayBuffer | null = null;
  description: string = '';

  ngOnInit(): void {
    this.tags = [...this.generaltags];
  }

  changeDescription(e: Event): void {
    this.description = (e.target as HTMLInputElement).value;
    this.checkValidity();
  }

  getTag(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      if ((e.target as HTMLInputElement)?.value !== '') {
        if (!this.tags.includes((e.target as HTMLInputElement)?.value)) {
          this.tags.push((e.target as HTMLInputElement)?.value);
          this.selectTag((e.target as HTMLInputElement).value);
          (e.target as HTMLInputElement).value = '';
        } else {
          this.selectTag((e.target as HTMLInputElement).value);
        }
      }
    }
  }

  selectTag(tag: string): void {
    if (!this.selectedTags.includes(tag.toLowerCase())) {
      this.selectedTags.push(tag.toLowerCase());
      this.checkValidity();
    }
  }

  deSelectTag(tag: string, e: Event): void {
    e.stopPropagation();
    this.selectedTags = this.selectedTags.filter(
      (t) => t !== tag.toLowerCase(),
      this.checkValidity()
    );
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0]; // Add null check here
    this.selectedFile = file ?? null; // Add null check here

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => (this.imageUrl = reader.result);
      reader.readAsDataURL(file);
      this.checkValidity();
      let fileName = this.getImageFillName(file.name);
    }
  }

  getImageFillName(img: string): string {
    const dotIndex = img.lastIndexOf('.');
    if (dotIndex !== -1) {
      return img.substring(0, dotIndex);
    }
    return img;
  }

  checkValidity(): boolean {
    if (
      this.description === '' ||
      this.selectedTags.length === 0 ||
      !this.selectedFile
    ) {
      return false;
    }
    return true;
  }
  onSubmit(): void {
    let data = {
      filename: this.fileName,
      imageDescription: this.description,
      tags: this.selectedTags,
      image: this.imageUrl,
    };
    console.log('Submitted', data);
  }
}
