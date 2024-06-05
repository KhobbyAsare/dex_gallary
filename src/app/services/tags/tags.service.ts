import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  tags = [
    'people',
    'trendy',
    'designs',
    'communication',
    'smart',
    'events',
    'games',
    'background',
    'workSpace',
    'devices',
    'program languages',
  ];
}
