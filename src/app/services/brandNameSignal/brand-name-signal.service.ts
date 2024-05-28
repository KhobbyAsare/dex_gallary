import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrandNameSignalService {
  constructor() {}

  brand_name = signal<string>('Dex');
}
