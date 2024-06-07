import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadImageComponent } from './upload-image.component';

describe('UploadImageComponent', () => {
  let component: UploadImageComponent;
  let fixture: ComponentFixture<UploadImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // The first test checks if the component is created successfully.
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // The second test checks if the checkValidity method returns true when all the required fields are filled.
  it('should check validity', () => {
    component.description = 'Test description';
    component.selectedTags = ['tag1', 'tag2'];
    component.selectedFile = new File([''], 'filename', { type: 'text/html' });
    expect(component.checkValidity()).toBeTruthy();
  });

  // The third test checks if the checkValidity method returns false when the description is empty.
  it('should fail validity check when description is empty', () => {
    component.description = '';
    component.selectedTags = ['tag1', 'tag2'];
    component.selectedFile = new File([''], 'filename', { type: 'text/html' });
    expect(component.checkValidity()).toBeFalsy();
  });

  // The fourth test checks if the checkValidity method returns false when no tags are selected.
  it('should fail validity check when no tags are selected', () => {
    component.description = 'Test description';
    component.selectedTags = [];
    component.selectedFile = new File([''], 'filename', { type: 'text/html' });
    expect(component.checkValidity()).toBeFalsy();
  });

  // The fifth test checks if the checkValidity method returns false when no file is selected.
  it('should fail validity check when no file is selected', () => {
    component.description = 'Test description';
    component.selectedTags = ['tag1', 'tag2'];
    component.selectedFile = null;
    expect(component.checkValidity()).toBeFalsy();
  });
});
