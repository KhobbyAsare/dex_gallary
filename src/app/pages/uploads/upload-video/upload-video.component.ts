import { Component, inject } from '@angular/core';
import { BrandNameSignalService } from '../../../services/brandNameSignal/brand-name-signal.service';
import { TagsService } from '../../../services/tags/tags.service';
import { CommonModule, TitleCasePipe } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-upload-video',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TitleCasePipe,
    RouterModule,
  ],
  templateUrl: './upload-video.component.html',
  styleUrl: './upload-video.component.scss',
})
export class UploadVideoComponent {
  public brandName = inject(BrandNameSignalService).brand_name();
  private generaltags = inject(TagsService).tags;
  private fb = inject(FormBuilder);
  selectedFile: File | null = null;
  imageFile: File | null = null;
  public tags: string[] = [];
  isTagInput: boolean = false;

  constructor() {}

  // data collected
  selectedTags: string[] = [];
  fileName: string = '';
  videoUrl: string | ArrayBuffer | null = null;
  imageUrl: string | ArrayBuffer | null = null;
  description: string = '';

  // TODO: Add the form group
  // MUST HAVE: videoTitle, description, links from user uploading
  // OPTIONAL: tags
  // VALIDATION: videoTitle, description, links are required
  // GET: the video url from the videoUrl variable

  // TODO ON MY SIDE:
  // MUST: get the user name from the user service/ auth service
  // MUST: get the user id from the user service/ auth service
  // MUST: get the profile picture from the user service/ auth service
  // GET: date uploaded now -< new Date().toISOString()

  uploadingDeatils = this.fb.group({
    videoTitle: ['', [Validators.required]],
    description: ['', [Validators.required]],
    links: ['', [Validators.required]],
  });

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
      reader.onload = (e) => (this.videoUrl = reader.result);
      reader.readAsDataURL(file);
      this.checkValidity();
      this.fileName = this.getImageFillName(file.name);
    }
  }

  onImageFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0]; // Add null check here
    this.imageFile = file ?? null; // Add null check here

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => (this.imageUrl = reader.result);
      reader.readAsDataURL(file);
      this.checkValidity();
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
      image: this.videoUrl,
    };
    console.log('Submitted', data);
  }
}
