import { Component } from '@angular/core';
import { InteractiveNavigatioBarComponent } from "../../components/interactive-navigatio-bar/interactive-navigatio-bar.component";
import { AutoScrollComponent } from "../../components/auto-scroll/auto-scroll.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { ServiceComponent } from "./components/service/service.component";
import { BottonBtnsComponent } from "./components/botton-btns/botton-btns.component";
import { PartnershipsScrollComponent } from "../../components/partnerships-scroll/partnerships-scroll.component";
import { CardsScatteredComponent } from "../../components/cards-scattered/cards-scattered.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss',
    imports: [InteractiveNavigatioBarComponent, AutoScrollComponent, HeroSectionComponent, ServiceComponent, BottonBtnsComponent, PartnershipsScrollComponent, CardsScatteredComponent]
})
export class LandingPageComponent {

}
