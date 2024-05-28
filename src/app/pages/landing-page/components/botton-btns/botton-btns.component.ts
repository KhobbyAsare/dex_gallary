import { Component } from '@angular/core';
import { ButtonsComponent } from "../../../../components/buttons/buttons.component";

@Component({
    selector: 'app-botton-btns',
    standalone: true,
    templateUrl: './botton-btns.component.html',
    styleUrl: './botton-btns.component.scss',
    imports: [ButtonsComponent]
})
export class BottonBtnsComponent {

}
