import { Component } from '@angular/core';
import { ButtonsComponent } from "../../../../components/buttons/buttons.component";

@Component({
    selector: 'app-hero-section',
    standalone: true,
    templateUrl: './hero-section.component.html',
    styleUrl: './hero-section.component.scss',
    imports: [ButtonsComponent]
})
export class HeroSectionComponent {

}
